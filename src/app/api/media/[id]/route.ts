import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createClient } from "@supabase/supabase-js";

function getSupabaseAdmin() {
  const url = process.env.worldfiber_SUPABASE_URL || process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.worldfiber_SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error("Supabase env vars not set");
  return createClient(url, key, { auth: { persistSession: false } });
}

const BUCKET = "media";

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    const body = await req.json();
    const media = await prisma.media.update({ where: { id }, data: { altText: body.altText } });
    return NextResponse.json({ success: true, data: media });
  } catch {
    return NextResponse.json({ success: false, message: "Failed to update media" }, { status: 500 });
  }
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    const media = await prisma.media.findUnique({ where: { id } });
    if (media) {
      // Extract the storage path from the public URL (everything after /object/public/media/)
      try {
        const supabase = getSupabaseAdmin();
        const urlObj = new URL(media.url);
        const marker = `/object/public/${BUCKET}/`;
        const idx = urlObj.pathname.indexOf(marker);
        if (idx !== -1) {
          const storagePath = urlObj.pathname.slice(idx + marker.length);
          await supabase.storage.from(BUCKET).remove([storagePath]);
        }
      } catch {
        // Storage deletion failure is non-fatal — still delete the DB record
      }
      await prisma.media.delete({ where: { id } });
    }
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false, message: "Failed to delete media" }, { status: 500 });
  }
}
