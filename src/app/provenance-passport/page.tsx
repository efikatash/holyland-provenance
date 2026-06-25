import type { Metadata } from "next";
import Image from "next/image";
import { resolveImageSrc } from "@/lib/utils";
import Link from "next/link";
import { ShieldCheck, Lock, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FadeIn } from "@/components/shared/Motion";
import { DisclaimerBox } from "@/components/shared/DisclaimerBox";
import { PremiumLinkButton } from "@/components/shared/PremiumLinkButton";
import { JerusalemSkyline } from "@/components/shared/JerusalemSkyline";
import { GoldDivider } from "@/components/shared/GoldDivider";
import { ProcessStepper } from "@/components/provenance/ProcessStepper";
import { CertificateMockup } from "@/components/provenance/CertificateMockup";
import { QRProofCard } from "@/components/provenance/QRProofCard";
import { JourneyLogCard } from "@/components/provenance/JourneyLogCard";
import { TamperSealBadge } from "@/components/provenance/TamperSealBadge";
import { VerificationDemo } from "@/components/provenance/VerificationDemo";
import { documentationTierLabels } from "@/lib/documentation-tier";

export const metadata: Metadata = {
  title: "Holy Land Provenance Passport",
  description:
    "How the Holy Land Provenance Passport works: unique serial numbers, QR proof pages, certificates, batch journey logs, photo and video documentation, and tamper-evident seals.",
};

const passportContents = [
  "Unique serial number",
  "QR proof page you can scan or look up online",
  "Certificate of Holy Land Documentation",
  "Batch Journey Log",
  "Holy Land origin record",
  "Supplier invoice reference",
  "Shipment tracking record",
  "Photo and video documentation",
  "Tamper-evident seal (eligible items)",
  "Product care card",
  "Mini Holy Land map card",
  "Thank you card",
];

export default function ProvenancePassportPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-gradient bg-grain py-20 sm:py-28">
        <JerusalemSkyline className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 w-full text-ivory-100 opacity-[0.06]" />
        <Container className="relative grid items-center gap-14 lg:grid-cols-2">
          <FadeIn>
            <span className="eyebrow text-gold-400">
              <ShieldCheck className="h-3.5 w-3.5" /> The Trust System
            </span>
            <h1 className="mt-5 text-display-md text-balance text-ivory-100 sm:text-display-lg">
              The Holy Land Provenance Passport
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-ivory-300/80 sm:text-lg">
              A documentation system built so a pastor, gift shop owner, or customer never has to take our word for
              it. Every eligible product can carry a serial number, a QR proof page, a printed certificate, and a
              record of how it traveled from the Holy Land to the Philippines.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <PremiumLinkButton href="#verification-experience" variant="gold" size="lg" icon={ArrowRight}>
                Try the Verification Demo
              </PremiumLinkButton>
              <PremiumLinkButton href="/verify-product" variant="outline-light" size="lg">
                Go to Verify a Product
              </PremiumLinkButton>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="overflow-hidden rounded-lg border border-gold-500/25 bg-navy-800/40 p-2 shadow-2xl">
              <Image
                src={resolveImageSrc("/images/provenance/provenance-passport-overview.png")}
                alt="Holy Land Provenance Passport overview: passport booklet, certificate, serial tag, shofar horn, and tamper-evident seal"
                width={760}
                height={950}
                className="h-auto w-full rounded-md"
                priority
              />
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* 1. What is the Holy Land Provenance Passport? */}
      <section id="what-is" className="bg-ivory py-20 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-2 lg:items-start">
          <FadeIn>
            <p className="eyebrow">01 &middot; What It Is</p>
            <h2 className="mt-4 text-display-sm text-navy-700 sm:text-display-md">
              What is the Holy Land Provenance Passport?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-400">
              The Provenance Passport is our documentation system for proving where a product came from and how it
              reached you. Rather than asking customers and churches to trust a claim on a label, we build a paper
              and digital trail behind eligible products — so the claim can be checked.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-400">
              Not every item carries every document; a flagship shofar carries more than a single bookmark. See
              &ldquo;Documentation by Product Tier&rdquo; below for how we scale proof to price point.
            </p>
            <DisclaimerBox className="mt-6" title="A note on how we word origin claims">
              We say a shofar is <strong>handcrafted or prepared in the Holy Land from natural horn</strong> — we do not
              claim the horn itself originated from a Holy Land animal unless that has been specifically verified.
              We use <strong>&ldquo;documented at Biblical sites&rdquo;</strong> or{" "}
              <strong>&ldquo;photographed in selected Holy Land locations&rdquo;</strong> rather than vaguer
              language, and we do not use the word <strong>&ldquo;blessed&rdquo;</strong> unless actual blessing
              documentation exists for that item.
            </DisclaimerBox>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-navy-700">
              A Provenance Passport can include:
            </p>
            <ul className="grid gap-2.5 sm:grid-cols-2">
              {passportContents.map((item) => (
                <li key={item} className="flex items-start gap-2.5 rounded-md border border-stone-200 bg-ivory-100 p-3 text-sm text-ink-400">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-600" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </Container>
      </section>

      {/* 2. How every product is verified */}
      <section id="how-verified" className="bg-ivory-200 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="02 &middot; The Process"
            title="How every product is verified"
            description="The same four-step process runs behind every collection, scaled to what each product's price point can reasonably support."
          />
          <FadeIn className="mt-14">
            <ProcessStepper />
          </FadeIn>
        </Container>
      </section>

      {/* 3. Unique serial number and QR code */}
      <section id="serial-qr" className="bg-ivory py-20 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <QRProofCard />
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="eyebrow">03 &middot; Serial &amp; QR</p>
            <h2 className="mt-4 text-display-sm text-navy-700 sm:text-display-md">
              A unique serial number and QR code
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-400">
              Eligible items — beginning with our shofars and premium gift sets — are assigned a unique serial
              number such as <strong className="text-navy-700">HL-SHF-000127</strong>, tied to a batch reference
              such as <strong className="text-navy-700">HL-2026-06-001</strong>. A printed QR card links directly to
              that record on our Verify a Product page.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-400">
              Smaller, lower-cost accessories are documented at the batch level instead of individually serialized
              — practical, and still traceable to a dated, documented batch.
            </p>
            <div className="mt-6">
              <PremiumLinkButton href="/verify-product" variant="outline" icon={ArrowRight}>
                Try a Live Lookup
              </PremiumLinkButton>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* 4. Photo and video proof from the Holy Land */}
      <section id="photo-video" className="bg-ivory-200 py-20 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <p className="eyebrow">04 &middot; Photo &amp; Video Proof</p>
            <h2 className="mt-4 text-display-sm text-navy-700 sm:text-display-md">Photo and video proof from the Holy Land</h2>
            <p className="mt-5 text-base leading-relaxed text-ink-400">
              Batches are photographed and, where practical, filmed at the workshop and at selected Holy Land
              locations — Jerusalem, the Sea of Galilee, and the Jordan River area are common reference points.
              These images are linked to the batch record behind each QR proof page.
            </p>
            <DisclaimerBox className="mt-6" tone="muted">
              We describe this as &ldquo;documented at selected Biblical sites&rdquo; or &ldquo;photographed in
              selected Holy Land locations.&rdquo; We do not imply a specific site of manufacture unless that has
              been verified for that batch.
            </DisclaimerBox>
          </FadeIn>
          <FadeIn delay={0.1} className="overflow-hidden rounded-lg border border-stone-200 shadow-card">
            <Image
              src={resolveImageSrc("/images/provenance/provenance-digital-verification.png")}
              alt="Sample digital verification screens showing photo and video documentation from Jerusalem, the Sea of Galilee, and the Jordan River"
              width={760}
              height={950}
              className="h-auto w-full"
            />
          </FadeIn>
        </Container>
      </section>

      {/* 5. Supplier and shipment documentation */}
      <section id="supplier-shipment" className="bg-ivory py-20 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <JourneyLogCard />
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="eyebrow">05 &middot; Supplier &amp; Shipment</p>
            <h2 className="mt-4 text-display-sm text-navy-700 sm:text-display-md">
              Supplier and shipment documentation
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-400">
              Behind each batch sits an ordinary paper trail: a supplier invoice reference, a shipment waybill, and
              — for animal-horn products — origin and processing documentation. The Batch Journey Log summarizes
              this trail in plain language, from preparation in the Holy Land through import clearance in the Philippines.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-400">
              For full detail on what documentation typically accompanies a shipment, see{" "}
              <Link href="/import-documentation" className="font-semibold text-gold-700 underline hover:text-gold-800">
                Import &amp; Documentation
              </Link>
              .
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* 6. Tamper-evident packaging */}
      <section id="tamper-evident" className="bg-ivory-200 py-20 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <p className="eyebrow">06 &middot; Tamper-Evident Packaging</p>
            <h2 className="mt-4 text-display-sm text-navy-700 sm:text-display-md">Tamper-evident packaging</h2>
            <p className="mt-5 text-base leading-relaxed text-ink-400">
              Eligible items ship with a numbered tamper-evident seal across the packaging. An intact seal tells the
              recipient — pastor, gift shop, or individual buyer — that the box has not been opened since it left
              our hands.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-400">
              If a seal arrives broken or missing, contact us with your serial or batch number before use so we can
              look into it.
            </p>
          </FadeIn>
          <FadeIn delay={0.1} className="relative">
            <div className="overflow-hidden rounded-lg border border-stone-200 shadow-card">
              <Image
                src={resolveImageSrc("/images/provenance/provenance-certificate-system.png")}
                alt="Holy Land Provenance certificate system showing the batch journey log, tamper-evident seals, and printed proof materials"
                width={760}
                height={950}
                className="h-auto w-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden sm:block">
              <TamperSealBadge size="md" />
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* 7. Customer verification experience (live demo) */}
      <section id="verification-experience" className="bg-ivory py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="07 &middot; Try It Yourself"
            title="The customer verification experience"
            description="This is the same lookup available on our Verify a Product page. Enter a sample serial number below to see what a verified record looks like."
          />
          <FadeIn className="mt-14 rounded-xl border border-stone-200 bg-ivory-100 p-6 shadow-card sm:p-10">
            <VerificationDemo />
          </FadeIn>
        </Container>
      </section>

      {/* 8 & 9. Sample certificate + QR proof page mockups */}
      <section id="certificate-preview" className="relative overflow-hidden bg-navy-gradient bg-grain py-20 sm:py-28">
        <JerusalemSkyline className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 w-full text-ivory-100 opacity-[0.06]" />
        <Container className="relative">
          <SectionHeading
            light
            eyebrow="08 &amp; 09 &middot; Sample Documents"
            title="Sample certificate and QR proof page"
            description="Illustrative samples of the printed materials included with a verified order. Real certificates carry the specific serial, batch, and product details for your item."
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
            <FadeIn>
              <CertificateMockup />
            </FadeIn>
            <FadeIn delay={0.1} className="grid gap-6">
              <QRProofCard />
              <div className="overflow-hidden rounded-md border border-gold-500/20 shadow-card">
                <Image
                  src={resolveImageSrc("/images/provenance/provenance-trust-package.png")}
                  alt="The full Holy Land Provenance trust package, including passport booklet, certificate, journey log, and tamper-evident seal"
                  width={760}
                  height={950}
                  className="h-auto w-full"
                />
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* 10. Why this matters */}
      <section className="bg-ivory py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="10 &middot; Why It Matters"
            title="Why this matters for churches and customers in the Philippines"
            description="The Christian gift market has a credibility problem: bold spiritual claims, with no paperwork behind them. This system exists to be the exception."
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {[
              {
                icon: Users,
                title: "For churches ordering in bulk",
                body: "Church administrators can review documentation before committing to a congregational order — not just product photos.",
              },
              {
                icon: ShieldCheck,
                title: "For gift shops & distributors",
                body: "Resellers can show their own customers a verifiable record, not just a verbal assurance of Holy Land origin.",
              },
              {
                icon: Lock,
                title: "For individual buyers",
                body: "A meaningful gift carries more weight when its story can be checked, not just told.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.title}>
                  <div className="rounded-lg border border-stone-200 bg-ivory-100 p-6 text-center sm:text-left">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-navy-700/5 text-gold-700">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-serif text-lg text-navy-700">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-400">{item.body}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <GoldDivider />
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-400">
              Documentation tiers referenced throughout this site: {documentationTierLabels.full},{" "}
              {documentationTierLabels.batch}, and {documentationTierLabels.origin} — see any product page for
              which tier applies.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <PremiumLinkButton href="/verify-product" variant="gold" size="lg" icon={ArrowRight}>
                Verify a Product
              </PremiumLinkButton>
              <PremiumLinkButton href="/request-quote" variant="outline" size="lg">
                Request Quote
              </PremiumLinkButton>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
