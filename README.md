# World Fiber Net — Official Website

A complete, launch-ready website for **World Fiber Net Pvt. Ltd.**, a Nepal-based fiber internet service provider offering FTTH Home Fiber, Corporate Fiber, and IPTV.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Database | SQLite (dev) / PostgreSQL (prod) |
| ORM | Prisma 7 |
| Auth | NextAuth v5 (Credentials) |
| Validation | Zod |
| Forms | React Hook Form |
| Notifications | React Hot Toast |
| Animations | Framer Motion |
| Icons | Lucide React |

## Project Structure

```
src/
├── app/
│   ├── (public pages)        # Home, About, Services, Packages, IPTV, Recharge, Offers, FAQ, Contact, Support, Terms, Privacy
│   ├── admin/
│   │   ├── login/            # Admin login page
│   │   └── (dashboard)/      # Protected admin area
│   │       ├── dashboard/    # Stats & overview
│   │       ├── packages/     # Package management
│   │       ├── banners/      # Banner manager
│   │       ├── services/     # Services overview
│   │       ├── offers/       # Offers management
│   │       ├── faq/          # FAQ management
│   │       ├── testimonials/ # Testimonial management
│   │       ├── enquiries/    # Customer enquiries
│   │       ├── tickets/      # Support tickets
│   │       ├── media/        # Media library
│   │       ├── newsletter/   # Newsletter subscribers
│   │       ├── users/        # Admin users
│   │       ├── pages/        # Pages overview
│   │       └── settings/     # Site settings
│   └── api/                  # REST API routes
├── components/
│   ├── layout/               # Header, Footer, LiveChatWidget
│   ├── sections/             # Homepage sections
│   ├── admin/                # Admin components
│   └── ui/                   # Shared UI components
├── lib/
│   ├── prisma.ts             # Prisma client
│   ├── auth.ts               # NextAuth config
│   └── utils.ts              # Utility functions
└── types/
    └── next-auth.d.ts        # Auth type extensions
prisma/
├── schema.prisma             # Database schema
├── seed.ts                   # Seed data
└── dev.db                    # SQLite database
```

## Environment Variables

Create a `.env` file at the project root:

```bash
# Database — see "Database URL resolution" below
DATABASE_URL="postgresql://user:password@host:5432/worldfibernet"

# NextAuth
NEXTAUTH_SECRET="your-secret-key-change-in-production"
NEXTAUTH_URL="http://localhost:3000"

# Public URL
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

### Database URL resolution

The app resolves the PostgreSQL connection string from the **first** variable found in this order:

| Priority | Variable | Source |
|----------|----------|--------|
| 1 | `DATABASE_URL` | Manual / generic |
| 2 | `worldfiber_POSTGRES_PRISMA_URL` | Vercel Postgres integration (pooled, Prisma-safe) |
| 3 | `worldfiber_POSTGRES_URL` | Vercel Postgres integration (pooled) |
| 4 | `POSTGRES_PRISMA_URL` | Vercel Postgres — unprefixed fallback |
| 5 | `POSTGRES_URL` | Vercel Postgres — unprefixed fallback |

**On Vercel:** when the Postgres integration is linked to the `worldfiber` project, Vercel automatically injects `worldfiber_POSTGRES_PRISMA_URL` and `worldfiber_POSTGRES_URL`. No manual `DATABASE_URL` variable is needed.

**Locally:** add `DATABASE_URL` to your `.env` file pointing at your local or remote PostgreSQL instance.

## Installation

### 1. Clone & Install

```bash
git clone <repo-url>
cd World-Fiber
npm install
```

### 2. Configure Environment

```bash
cp .env.example .env
# Edit .env with your values
```

### 3. Set Up Database

For SQLite (development — works out of the box):
```bash
npx prisma migrate dev --name init
```

For PostgreSQL (production):
1. Update `prisma/schema.prisma` datasource provider to `postgresql`
2. Add `url = env("DATABASE_URL")` to the datasource block
3. Run: `npx prisma migrate deploy`

### 4. Seed Database

```bash
npx ts-node --compiler-options '{"module":"CommonJS"}' prisma/seed.ts
```

### 5. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Admin Panel

### Default Login

| Field | Value |
|-------|-------|
| URL | http://localhost:3000/admin |
| Email | admin@worldfibernet.net.np |
| Password | ChangeMe123! |

> **⚠️ Important:** Change the default password immediately after your first login. Navigate to Admin → Users or update directly in the database.

### Admin Modules

| Module | Path | Description |
|--------|------|-------------|
| Dashboard | /admin/dashboard | Stats, recent activity |
| Packages | /admin/packages | Add/edit internet plans & terms |
| Banners | /admin/banners | Homepage and page banners |
| Services | /admin/services | Service listings |
| Offers | /admin/offers | Promotions & deals |
| FAQs | /admin/faq | Frequently asked questions |
| Testimonials | /admin/testimonials | Customer reviews |
| Enquiries | /admin/enquiries | Customer enquiry inbox |
| Support Tickets | /admin/tickets | Support ticket management |
| Media Library | /admin/media | Upload & manage images |
| Newsletter | /admin/newsletter | Email subscribers |
| Users | /admin/users | Admin user accounts |
| Pages | /admin/pages | Page overview & links |
| Settings | /admin/settings | Site-wide settings |

## Managing Content

### How to Upload Banners

1. Go to Admin → Banners → Add Banner
2. Enter title, subtitle, CTA text and link
3. Select placement (HOMEPAGE_HERO, HOMEPAGE_PROMO, etc.)
4. Upload image via Admin → Media Library first, then paste the URL
5. Set Active and Save

### How to Manage Packages

1. Go to Admin → Packages → Add Package
2. Enter name, speed, price, features (JSON array format)
3. Add Terms & Conditions content
4. Mark as Popular if needed
5. Set category (HOME_FIBER, CORPORATE_FIBER, IPTV_COMBO)

### How to Update Package Terms

1. Go to Admin → Packages → Edit (pencil icon)
2. Scroll to "Terms & Conditions" field
3. Update the content (one item per line, use • for bullets)
4. Save — terms appear in "View Terms" modal on website

### How to Manage Recharge Page Content

The Recharge page explains payment methods (eSewa, Khalti, Mobile Banking, Bank Transfer). To update:
1. Edit `src/app/recharge/page.tsx` directly
2. Or manage via Admin → Settings for contact/billing info

### How to Update Site Settings

1. Go to Admin → Settings
2. Edit company info, contact details, social links
3. Update WhatsApp/Viber numbers for live chat widget
4. Save

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/packages | List packages |
| POST | /api/packages | Create package |
| PATCH | /api/packages/:id | Update package |
| DELETE | /api/packages/:id | Delete package |
| GET | /api/banners | List active banners |
| POST | /api/banners | Create banner |
| GET | /api/faq | List FAQs |
| POST | /api/enquiries | Submit enquiry |
| GET | /api/enquiries | List enquiries |
| POST | /api/support-tickets | Submit ticket |
| GET | /api/support-tickets | List tickets |
| POST | /api/newsletter | Subscribe |
| POST | /api/media | Upload file |
| GET/POST | /api/settings | Get/save settings |

## Public Pages

| Page | URL |
|------|-----|
| Home | / |
| About | /about |
| Services | /services |
| Packages | /packages |
| IPTV | /iptv |
| Recharge | /recharge |
| Offers | /offers |
| FAQ | /faq |
| Contact | /contact |
| Support Ticket | /support-ticket |
| Terms & Conditions | /terms-and-conditions |
| Privacy Policy | /privacy-policy |

## Deployment

### Vercel (Recommended)

```bash
npm run build
# Deploy to Vercel
vercel --prod
```

### Self-Hosted

```bash
npm run build
npm start
```

### Environment for Production

```bash
DATABASE_URL="postgresql://..."
NEXTAUTH_SECRET="strong-random-secret-min-32-chars"
NEXTAUTH_URL="https://yourdomain.com"
NEXT_PUBLIC_SITE_URL="https://yourdomain.com"
```

## Launch Checklist

- [ ] Change default admin password (`ChangeMe123!`)
- [ ] Upload real company logo (Admin → Media Library)
- [ ] Upload hero images and banner images
- [ ] Add real package plans and pricing
- [ ] Add real Terms & Conditions for each package
- [ ] Update contact info (Admin → Settings)
- [ ] Update WhatsApp/Viber numbers for live chat
- [ ] Add Messenger page link
- [ ] Configure support portal URL
- [ ] Add real testimonials
- [ ] Test enquiry form submission
- [ ] Test support ticket submission
- [ ] Test admin login
- [ ] Test mobile responsive layout
- [ ] Set up production database (PostgreSQL)
- [ ] Configure production environment variables
- [ ] Deploy to production server
- [ ] Connect domain name
- [ ] Enable HTTPS / SSL
- [ ] Test all payment method instructions on Recharge page
- [ ] Verify all internal links work

## Brand Colors

| Name | Hex |
|------|-----|
| Primary Blue | #25468F |
| Primary Green | #0B7F3A |
| Sky Blue | #2298D4 |
| Dark Navy | #071A3D |
| White | #FFFFFF |
| Light Gray | #F7F8FA |

## License

© 2025 World Fiber Net Pvt. Ltd. All Rights Reserved.
