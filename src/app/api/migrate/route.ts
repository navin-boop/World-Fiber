import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

const DDL = `
CREATE TABLE IF NOT EXISTS "User" (
  "id"        TEXT        NOT NULL,
  "email"     TEXT        NOT NULL,
  "password"  TEXT        NOT NULL,
  "name"      TEXT        NOT NULL,
  "role"      TEXT        NOT NULL DEFAULT 'EDITOR',
  "isActive"  BOOLEAN     NOT NULL DEFAULT true,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX IF NOT EXISTS "User_email_key" ON "User"("email");

CREATE TABLE IF NOT EXISTS "Page" (
  "id"        TEXT        NOT NULL,
  "title"     TEXT        NOT NULL,
  "slug"      TEXT        NOT NULL,
  "content"   TEXT        NOT NULL DEFAULT '',
  "metaTitle" TEXT        NOT NULL DEFAULT '',
  "metaDesc"  TEXT        NOT NULL DEFAULT '',
  "ogImage"   TEXT        NOT NULL DEFAULT '',
  "isActive"  BOOLEAN     NOT NULL DEFAULT true,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "Page_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX IF NOT EXISTS "Page_slug_key" ON "Page"("slug");

CREATE TABLE IF NOT EXISTS "Section" (
  "id"        TEXT        NOT NULL,
  "page"      TEXT        NOT NULL,
  "key"       TEXT        NOT NULL,
  "label"     TEXT        NOT NULL,
  "content"   TEXT        NOT NULL,
  "isActive"  BOOLEAN     NOT NULL DEFAULT true,
  "sortOrder" INTEGER     NOT NULL DEFAULT 0,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "Section_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX IF NOT EXISTS "Section_page_key_key" ON "Section"("page","key");

CREATE TABLE IF NOT EXISTS "Banner" (
  "id"             TEXT        NOT NULL,
  "title"          TEXT        NOT NULL,
  "subtitle"       TEXT        NOT NULL DEFAULT '',
  "desktopImageUrl" TEXT       NOT NULL DEFAULT '',
  "mobileImageUrl" TEXT        NOT NULL DEFAULT '',
  "ctaText"        TEXT        NOT NULL DEFAULT '',
  "ctaLink"        TEXT        NOT NULL DEFAULT '',
  "placement"      TEXT        NOT NULL,
  "isActive"       BOOLEAN     NOT NULL DEFAULT true,
  "sortOrder"      INTEGER     NOT NULL DEFAULT 0,
  "startDate"      TIMESTAMP(3),
  "endDate"        TIMESTAMP(3),
  "altText"        TEXT        NOT NULL DEFAULT '',
  "createdAt"      TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt"      TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "Banner_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "ImageSection" (
  "id"             TEXT        NOT NULL,
  "sectionName"    TEXT        NOT NULL,
  "pagePlacement"  TEXT        NOT NULL,
  "title"          TEXT        NOT NULL DEFAULT '',
  "subtitle"       TEXT        NOT NULL DEFAULT '',
  "description"    TEXT        NOT NULL DEFAULT '',
  "desktopImageUrl" TEXT       NOT NULL DEFAULT '',
  "mobileImageUrl" TEXT        NOT NULL DEFAULT '',
  "ctaText"        TEXT        NOT NULL DEFAULT '',
  "ctaLink"        TEXT        NOT NULL DEFAULT '',
  "altText"        TEXT        NOT NULL DEFAULT '',
  "overlayStyle"   TEXT        NOT NULL DEFAULT 'dark',
  "isActive"       BOOLEAN     NOT NULL DEFAULT true,
  "sortOrder"      INTEGER     NOT NULL DEFAULT 0,
  "createdAt"      TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt"      TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "ImageSection_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "Service" (
  "id"          TEXT        NOT NULL,
  "name"        TEXT        NOT NULL,
  "slug"        TEXT        NOT NULL,
  "description" TEXT        NOT NULL,
  "icon"        TEXT        NOT NULL DEFAULT '',
  "imageUrl"    TEXT        NOT NULL DEFAULT '',
  "ctaText"     TEXT        NOT NULL DEFAULT 'Learn More',
  "ctaLink"     TEXT        NOT NULL DEFAULT '',
  "parentId"    TEXT,
  "isActive"    BOOLEAN     NOT NULL DEFAULT true,
  "sortOrder"   INTEGER     NOT NULL DEFAULT 0,
  "createdAt"   TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt"   TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX IF NOT EXISTS "Service_slug_key" ON "Service"("slug");

CREATE TABLE IF NOT EXISTS "Package" (
  "id"           TEXT             NOT NULL,
  "name"         TEXT             NOT NULL,
  "slug"         TEXT             NOT NULL,
  "category"     TEXT             NOT NULL,
  "speed"        TEXT             NOT NULL,
  "price"        DOUBLE PRECISION NOT NULL,
  "billingCycle" TEXT             NOT NULL DEFAULT 'monthly',
  "description"  TEXT             NOT NULL DEFAULT '',
  "features"     TEXT             NOT NULL,
  "imageUrl"     TEXT             NOT NULL DEFAULT '',
  "isPopular"    BOOLEAN          NOT NULL DEFAULT false,
  "isActive"     BOOLEAN          NOT NULL DEFAULT true,
  "sortOrder"    INTEGER          NOT NULL DEFAULT 0,
  "termsTitle"   TEXT             NOT NULL DEFAULT 'Terms & Conditions',
  "termsContent" TEXT             NOT NULL DEFAULT '',
  "createdAt"    TIMESTAMP(3)     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt"    TIMESTAMP(3)     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "Package_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX IF NOT EXISTS "Package_slug_key" ON "Package"("slug");

CREATE TABLE IF NOT EXISTS "Offer" (
  "id"             TEXT        NOT NULL,
  "title"          TEXT        NOT NULL,
  "description"    TEXT        NOT NULL,
  "bannerUrl"      TEXT        NOT NULL DEFAULT '',
  "mobileBannerUrl" TEXT       NOT NULL DEFAULT '',
  "ctaText"        TEXT        NOT NULL DEFAULT 'Learn More',
  "ctaLink"        TEXT        NOT NULL DEFAULT '',
  "startDate"      TIMESTAMP(3),
  "endDate"        TIMESTAMP(3),
  "isActive"       BOOLEAN     NOT NULL DEFAULT true,
  "sortOrder"      INTEGER     NOT NULL DEFAULT 0,
  "createdAt"      TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt"      TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "Offer_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "FAQ" (
  "id"        TEXT        NOT NULL,
  "question"  TEXT        NOT NULL,
  "answer"    TEXT        NOT NULL,
  "category"  TEXT        NOT NULL DEFAULT 'General',
  "isActive"  BOOLEAN     NOT NULL DEFAULT true,
  "sortOrder" INTEGER     NOT NULL DEFAULT 0,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "FAQ_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "Testimonial" (
  "id"        TEXT        NOT NULL,
  "name"      TEXT        NOT NULL,
  "location"  TEXT        NOT NULL,
  "photo"     TEXT        NOT NULL DEFAULT '',
  "rating"    INTEGER     NOT NULL DEFAULT 5,
  "text"      TEXT        NOT NULL,
  "isActive"  BOOLEAN     NOT NULL DEFAULT true,
  "sortOrder" INTEGER     NOT NULL DEFAULT 0,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "Testimonial_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "Enquiry" (
  "id"                TEXT        NOT NULL,
  "type"              TEXT        NOT NULL DEFAULT 'GENERAL',
  "fullName"          TEXT        NOT NULL,
  "phone"             TEXT        NOT NULL,
  "email"             TEXT        NOT NULL DEFAULT '',
  "location"          TEXT        NOT NULL DEFAULT '',
  "interestedService" TEXT        NOT NULL DEFAULT '',
  "interestedPackage" TEXT        NOT NULL DEFAULT '',
  "message"           TEXT        NOT NULL DEFAULT '',
  "sourcePage"        TEXT        NOT NULL DEFAULT '',
  "status"            TEXT        NOT NULL DEFAULT 'NEW',
  "createdAt"         TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt"         TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "Enquiry_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "SupportTicket" (
  "id"            TEXT        NOT NULL,
  "ticketNumber"  TEXT        NOT NULL,
  "fullName"      TEXT        NOT NULL,
  "phone"         TEXT        NOT NULL,
  "email"         TEXT        NOT NULL DEFAULT '',
  "customerId"    TEXT        NOT NULL DEFAULT '',
  "issueType"     TEXT        NOT NULL,
  "priority"      TEXT        NOT NULL DEFAULT 'MEDIUM',
  "message"       TEXT        NOT NULL,
  "attachmentUrl" TEXT        NOT NULL DEFAULT '',
  "status"        TEXT        NOT NULL DEFAULT 'OPEN',
  "assignedToId"  TEXT,
  "createdAt"     TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt"     TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "SupportTicket_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX IF NOT EXISTS "SupportTicket_ticketNumber_key" ON "SupportTicket"("ticketNumber");

CREATE TABLE IF NOT EXISTS "TicketNote" (
  "id"        TEXT        NOT NULL,
  "ticketId"  TEXT        NOT NULL,
  "userId"    TEXT        NOT NULL,
  "note"      TEXT        NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "TicketNote_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "NewsletterSubscriber" (
  "id"        TEXT        NOT NULL,
  "email"     TEXT        NOT NULL,
  "isActive"  BOOLEAN     NOT NULL DEFAULT true,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "NewsletterSubscriber_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX IF NOT EXISTS "NewsletterSubscriber_email_key" ON "NewsletterSubscriber"("email");

CREATE TABLE IF NOT EXISTS "Media" (
  "id"        TEXT        NOT NULL,
  "filename"  TEXT        NOT NULL,
  "url"       TEXT        NOT NULL,
  "altText"   TEXT        NOT NULL DEFAULT '',
  "size"      INTEGER     NOT NULL DEFAULT 0,
  "mimeType"  TEXT        NOT NULL DEFAULT '',
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "Media_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "SiteSettings" (
  "id"        TEXT        NOT NULL,
  "key"       TEXT        NOT NULL,
  "value"     TEXT        NOT NULL,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "SiteSettings_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX IF NOT EXISTS "SiteSettings_key_key" ON "SiteSettings"("key");

CREATE TABLE IF NOT EXISTS "ActivityLog" (
  "id"        TEXT        NOT NULL,
  "userId"    TEXT        NOT NULL,
  "action"    TEXT        NOT NULL,
  "target"    TEXT        NOT NULL DEFAULT '',
  "details"   TEXT        NOT NULL DEFAULT '',
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "ActivityLog_pkey" PRIMARY KEY ("id")
);

DO $$ BEGIN
  ALTER TABLE "TicketNote" ADD CONSTRAINT "TicketNote_ticketId_fkey"
    FOREIGN KEY ("ticketId") REFERENCES "SupportTicket"("id") ON DELETE CASCADE ON UPDATE CASCADE;
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  ALTER TABLE "TicketNote" ADD CONSTRAINT "TicketNote_userId_fkey"
    FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  ALTER TABLE "ActivityLog" ADD CONSTRAINT "ActivityLog_userId_fkey"
    FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
EXCEPTION WHEN duplicate_object THEN NULL; END $$;
`;

export async function POST() {
  try {
    await prisma.$executeRawUnsafe(DDL);
    const tables = await prisma.$queryRaw<{ tablename: string }[]>`
      SELECT tablename FROM pg_tables
      WHERE schemaname = 'public'
      ORDER BY tablename
    `;
    return NextResponse.json({
      ok: true,
      message: "All tables created.",
      tables: tables.map((t) => t.tablename),
    });
  } catch (err) {
    console.error("[migrate]", err);
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
