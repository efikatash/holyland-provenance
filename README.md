# Holy Land Provenance

**Israel Origin Products for Christian Communities in the Philippines**

Premium provenance-focused Next.js website for a Philippines-based business importing documented, Israel-origin Christian products — shofars, anointing oils, Bible study accessories, and Catholic devotional keepsakes.

---

## Prerequisites

- Node.js **18.17 or later** — download from [nodejs.org](https://nodejs.org)
- npm (ships with Node) — or pnpm / yarn if you prefer

Verify your installation:

```bash
node -v   # should print v18.x.x or higher
npm -v
```

---

## Installation

```bash
cd holyland-provenance
npm install
```

---

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Build & Production

```bash
npm run build   # type-checks and compiles
npm run start   # starts the production server
```

---

## Project Structure

```
src/
├── app/                          # Next.js App Router pages + root layout
│   ├── layout.tsx                # Root layout, fonts, metadata, JSON-LD
│   ├── page.tsx                  # Home page
│   ├── collections/[collection]/[product]/page.tsx   # Product detail
│   ├── about/ contact/ faq/      # Informational pages
│   ├── request-quote/            # Quote form page
│   ├── verify-product/           # Verification demo page
│   └── ...
│
├── components/
│   ├── layout/                   # Header, Footer, MobileNav, Logo
│   ├── home/                     # Hero, TrustStrip, AudienceSelector, etc.
│   ├── collections/              # CollectionCard
│   ├── products/                 # ProductCard, ProductDetail, ProductFilterGrid
│   ├── provenance/               # CertificateMockup, QRProofCard, JourneyLogCard,
│   │                             # VerificationDemo, ProcessStepper, TamperSealBadge
│   ├── forms/                    # ContactForm, QuoteForm
│   ├── faq/                      # FAQAccordion
│   ├── shared/                   # SectionHeading, PremiumButton, PremiumLinkButton,
│   │                             # Badge, DisclaimerBox, Container, MediaFrame,
│   │                             # ImagePlaceholder, Motion wrappers, etc.
│   └── ui/                       # Input, Select, Textarea, Checkbox, RadioPillGroup
│
├── data/
│   ├── products.ts               # All 31 products across 4 collections
│   ├── collections.ts            # 4 collection records with metadata + images
│   ├── provenance-samples.ts     # 2 sample provenance records for demo verification
│   ├── faq.ts                    # 10 FAQ items
│   ├── community.ts              # CommunityFit metadata (label, color, icon, etc.)
│   ├── nav.ts                    # Header and footer navigation structure
│   └── site-config.ts            # Contact details, brand URL, social links
│
└── lib/
    ├── types.ts                  # All shared TypeScript interfaces
    ├── utils.ts                  # cn() (clsx + tailwind-merge), formatLongDate()
    ├── documentation-tier.ts     # getDocumentationTier() — Full / Batch / Origin
    └── validations/              # Zod schemas for ContactForm and QuoteForm

public/images/
├── shofars/                      # 10 studio shofar photos
├── bible-study/                  # 4 Bible study collection overview images
└── provenance/                   # 4 provenance/certificate system images
```

---

## Before Launch — Things to Replace

Search for `REPLACE-BEFORE-LAUNCH` in the codebase. There are two critical locations:

### 1. Form submission (ContactForm + QuoteForm)

Both forms are **structured stubs** — they validate, show a success state, and `console.info` the submitted values. They do **not** send data anywhere.

**To wire them up:**

Option A — Email via Resend / SendGrid:
Create `src/app/api/contact/route.ts` and `src/app/api/quote/route.ts` (Next.js Route Handlers), call your email API inside, and `fetch` the endpoint from the form's `onSubmit` instead of the mock timeout.

Option B — Formspree / Netlify Forms:
Replace the `form` action with the service endpoint.

Option C — Google Sheets / CRM webhook:
POST the form values to your sheet/CRM API from a Route Handler.

Both forms capture the same fields described in the brief. The Zod schemas are in:
- `src/lib/validations/contact-form.ts`
- `src/lib/validations/quote-form.ts`

### 2. Verify Product backend

`src/components/provenance/VerificationDemo.tsx` reads from `src/data/provenance-samples.ts` — a hardcoded file with two sample records. It recognises `HL-SHF-000127` and `HL-OIL-000452` only.

**To connect to a real database:**

Replace the `findProvenanceSample(serial)` call with a `fetch` to your API. You can keep the same `ProvenanceSampleRecord` TypeScript interface from `src/lib/types.ts` as your API response shape.

---

## Replacing Contact Details

Edit **`src/data/site-config.ts`**:

```ts
contact: {
  email:        "YOUR_REAL_EMAIL@domain.com",
  phone:        "+63 XXX XXX XXXX",
  whatsapp:     "+63 XXX XXX XXXX",
  whatsappHref: "https://wa.me/63XXXXXXXXXX",
  location:     "Cebu, Philippines",
  hours:        "Monday – Friday, 9 AM – 6 PM PHT",
},
url: "https://www.holylandprovenance.com",   // your real domain
```

This `url` value is consumed by `app/sitemap.ts`, `app/robots.ts`, and the root metadata canonical URL.

---

## Adding Real Product Photos

Photos live in `public/images/`. Drop replacements in the appropriate subfolder — the filenames referenced in `src/data/products.ts` and `src/data/collections.ts` must match exactly.

Current filename map:

| Category | Files |
|---|---|
| Shofars | `public/images/shofars/*.jpg / *.png` (10 files) |
| Bible Study | `public/images/bible-study/*.png` (4 files) |
| Provenance | `public/images/provenance/*.png` (4 files) |

Categories without real photos yet (anointing oils, Catholic keepsakes) show polished `ImagePlaceholder` cards automatically — swap in real photos by adding `images: [{ src: "...", alt: "..." }]` to the product object in `src/data/products.ts`.

---

## Documentation Tier System

Products are assigned one of three provenance documentation tiers based on their `documentationAvailable` array:

| Tier | Trigger | Includes |
|---|---|---|
| **Full Passport** | Contains `"Unique serial number"` | QR proof page, Certificate, Batch Journey Log, Tamper-evident seal, Photo & video documentation |
| **Batch Provenance Record** | Contains `"Batch serial number"` | Certificate, Photo documentation from the batch |
| **Origin Statement Card** | Neither of the above | Printed origin statement card, Reference to the batch certificate |

To change which tier a product receives, edit its `documentationAvailable` array in `src/data/products.ts` — the tier is computed automatically.

---

## Religious Sensitivity — Editorial Guidelines

These rules are baked into the product data and copy, but must be maintained by any future content editor:

- **INC (Iglesia Ni Cristo) products**: no crosses, statues, icons, rosaries, shofars, anointing oil, or ritual objects. Text-only, Bible-centered. Every INC product carries a `cautionNote` confirming this.
- **Shofars**: always say "prepared in Israel from natural horn" — do not claim the horn came from Israeli animals unless you have verified documentation.
- **Anointing Oils**: "For external devotional use only." No medical or healing claims anywhere.
- **No "blessed"** unless actual blessing documentation exists and can be referenced.
- **No miracle, sacred power, guaranteed spiritual outcome, healing** language anywhere on the site.

---

## SEO Notes

- Root metadata is in `src/app/layout.tsx` (title template `%s | Holy Land Provenance`, OG image, Twitter card).
- Each page exports its own `metadata` with `title` and `description`.
- JSON-LD Organization schema is in the root layout.
- `app/sitemap.ts` auto-generates `/sitemap.xml` from all static routes + all 31 product routes.
- `app/robots.ts` generates `/robots.txt` pointing to the sitemap.

Replace the `metadataBase` URL in `src/app/layout.tsx` with your live domain before deploying.

---

## Deployment

The site is a standard Next.js 14 App Router project with no backend dependencies — it deploys anywhere that runs Node.

**Recommended: Vercel**
1. Push the repo to GitHub.
2. Import into [vercel.com](https://vercel.com) — it auto-detects Next.js.
3. Set no environment variables are required for the static version.

**Other hosts:** Any host that supports `npm run build && npm run start` (Railway, Render, Fly.io, AWS Amplify, etc.).

---

## Tech Stack

| Layer | Library |
|---|---|
| Framework | Next.js 14.2.5 (App Router) |
| Language | TypeScript |
| Styles | Tailwind CSS 3 with custom design tokens |
| Icons | Lucide React |
| Animation | Framer Motion |
| Forms | React Hook Form + Zod |
| Fonts | Playfair Display, Cormorant Garamond, Inter (via `next/font/google`) |
| Images | `next/image` + custom `MediaFrame` / `ImagePlaceholder` system |
