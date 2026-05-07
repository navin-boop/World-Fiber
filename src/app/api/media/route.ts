import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createClient } from "@supabase/supabase-js";

function getSupabaseAdmin() {
  const url = process.env.worldfiber_SUPABASE_URL || process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.worldfiber_SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error("Supabase env vars not set (SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY)");
  return createClient(url, key, { auth: { persistSession: false } });
}

const BUCKET = "media";

export async function GET() {
  try {
    const media = await prisma.media.findMany({ orderBy: { createdAt: "desc" } });
    return NextResponse.json({ success: true, data: media });
  } catch {
    return NextResponse.json({ success: false, message: "Failed to fetch media" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;
    const altText = (formData.get("altText") as string) || "";

    if (!file) {
      return NextResponse.json({ success: false, message: "No file provided" }, { status: 400 });
    }

    const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/svg+xml", "application/pdf"];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ success: false, message: "File type not allowed" }, { status: 400 });
    }

    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json({ success: false, message: "File size exceeds 5MB limit" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const ext = file.name.split(".").pop();
    const filename = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
    const storagePath = `uploads/${filename}`;

    const supabase = getSupabaseAdmin();

    // Ensure bucket exists (no-op if already exists)
    await supabase.storage.createBucket(BUCKET, { public: true }).catch(() => {});

    const { error: uploadError } = await supabase.storage
      .from(BUCKET)
      .upload(storagePath, buffer, { contentType: file.type, upsert: false });

    if (uploadError) {
      console.error("[media] Supabase upload error:", uploadError);
      return NextResponse.json({ success: false, message: "Failed to upload file to storage" }, { status: 500 });
    }

    const { data: publicUrlData } = supabase.storage.from(BUCKET).getPublicUrl(storagePath);
    const url = publicUrlData.publicUrl;

    const media = await prisma.media.create({
      data: { filename: file.name, url, altText, size: file.size, mimeType: file.type },
    });

    return NextResponse.json({ success: true, data: media, url });
  } catch (err) {
    console.error("[media] upload error:", err);
    return NextResponse.json({ success: false, message: "Failed to upload file" }, { status: 500 });
  }
}
