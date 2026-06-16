import type { Metadata } from "next";
import { ArrowRight, FileText, Receipt, Landmark, AlertTriangle } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FadeIn } from "@/components/shared/Motion";
import { DisclaimerBox } from "@/components/shared/DisclaimerBox";
import { PremiumLinkButton } from "@/components/shared/PremiumLinkButton";
import { ProcessStepper, type Step } from "@/components/provenance/ProcessStepper";
import { JerusalemSkyline } from "@/components/shared/JerusalemSkyline";

export const metadata: Metadata = {
  title: "Import & Documentation",
  description:
    "How Holy Land Provenance imports products from Israel to the Philippines: shipping carriers, customs and tax considerations, and documentation for animal-horn products. Informational only.",
};

const shipmentSteps: Step[] = [
  { title: "Prepared & batched in Israel", description: "Items are prepared, inspected, and assigned to a dated, documented batch before export." },
  { title: "Export documentation issued", description: "Supplier invoice, packing list, and — where applicable — origin or process certification are prepared." },
  { title: "International carrier", description: "Shipped via EMS, FedEx, DHL, or another approved carrier, depending on order size and destination." },
  { title: "Philippine customs clearance", description: "The shipment is declared and assessed by the Bureau of Customs based on value, classification, and applicable duties and taxes." },
];

const documents = [
  { icon: Receipt, title: "Supplier invoice", body: "Itemized value used for customs declaration and your own records." },
  { icon: FileText, title: "Waybill / shipping document", body: "Carrier reference (EMS, FedEx, DHL, or other) used to track the shipment." },
  { icon: Landmark, title: "Origin statement", body: "A statement of Israel preparation, worded to match what has been verified for that batch." },
  { icon: AlertTriangle, title: "Animal-horn documentation (shofars)", body: "Where applicable: product or process certification and a species / non-CITES statement." },
];

export default function ImportDocumentationPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-navy-gradient bg-grain py-20 sm:py-28">
        <JerusalemSkyline className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 w-full text-ivory-100 opacity-[0.06]" />
        <Container className="relative max-w-3xl text-center">
          <FadeIn>
            <span className="eyebrow text-gold-400">Import &amp; Documentation</span>
            <h1 className="mt-5 text-display-md text-balance text-ivory-100 sm:text-display-lg">
              How we import, in plain language
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ivory-300/80 sm:text-lg">
              An overview of how shipments move from Israel to the Philippines, and what documentation typically
              accompanies them. This page is informational only and is not legal, customs, or tax advice.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="bg-ivory py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="The Shipping Path"
            title="From preparation in Israel to your door"
          />
          <FadeIn className="mt-14">
            <ProcessStepper steps={shipmentSteps} />
          </FadeIn>
        </Container>
      </section>

      <section className="bg-ivory-200 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="What Typically Travels With a Shipment"
            title="Documentation behind every order"
            description="Exact documents vary by product, value, and destination. This is a general guide to what is commonly involved."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {documents.map((doc) => {
              const Icon = doc.icon;
              return (
                <FadeIn key={doc.title}>
                  <div className="h-full rounded-lg border border-stone-200 bg-ivory-100 p-6">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-700/5 text-gold-700">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-serif text-base text-navy-700">{doc.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-400">{doc.body}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-ivory py-20 sm:py-28">
        <Container className="max-w-3xl">
          <SectionHeading align="left" eyebrow="Customs, Duties &amp; Taxes" title="What can affect your landed cost" />
          <div className="mt-10 space-y-5 text-base leading-relaxed text-ink-400">
            <p>
              Philippine customs duties and taxes depend on factors including declared item value, freight and
              insurance cost, and the customs classification (HS code) assigned to the product. These factors can
              change order to order, even for the same item, depending on quantity and shipping method.
            </p>
            <p>
              When you request a quote, we can include an <strong className="text-navy-700">estimated</strong>{" "}
              landed cost — product, freight, and an estimate of duties and taxes — to help you budget. The{" "}
              <strong className="text-navy-700">final</strong> assessment is made by the Bureau of Customs at the
              time of import and may differ from our estimate.
            </p>
            <p>
              For animal-horn products such as shofars, additional documentation may be requested at clearance.
              See &ldquo;Animal-Horn Documentation&rdquo; above, and feel free to ask us what is currently required
              for a specific order.
            </p>
          </div>

          <DisclaimerBox className="mt-8" title="Informational only">
            This page is provided for general information and does not constitute legal, customs brokerage, or tax
            advice. Import requirements and classifications can change. Final import decisions, valuations, and
            duty assessments are made solely by the Philippine Bureau of Customs and other relevant authorities.
            For guidance specific to your order, consult a licensed customs broker or the Bureau of Customs
            directly.
          </DisclaimerBox>
        </Container>
      </section>

      <section className="bg-ivory-200 py-16 sm:py-20">
        <Container className="text-center">
          <h2 className="font-serif text-2xl text-navy-700 sm:text-3xl">Have a specific shipment in mind?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-ink-400">
            Request a quote with your item, quantity, and delivery city, and we will include an estimated landed
            cost alongside the documentation that applies.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <PremiumLinkButton href="/request-quote" variant="gold" icon={ArrowRight}>
              Request Quote
            </PremiumLinkButton>
            <PremiumLinkButton href="/faq" variant="outline">
              Read the FAQ
            </PremiumLinkButton>
          </div>
        </Container>
      </section>
    </div>
  );
}
