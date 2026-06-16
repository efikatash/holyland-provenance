import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FadeIn } from "@/components/shared/Motion";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { PremiumLinkButton } from "@/components/shared/PremiumLinkButton";
import { faqItems } from "@/data/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Holy Land Provenance: product origin, verification, shofars, anointing oils, bulk church orders, reseller terms, and the Iglesia Ni Cristo Bible Study Collection.",
};

export default function FaqPage() {
  return (
    <div className="bg-ivory py-16 sm:py-24">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Honest answers about origin, verification, and what we do and don't claim."
        />

        <FadeIn className="mt-14 rounded-xl border border-stone-200 bg-ivory-100 px-6 shadow-card sm:px-10">
          <FAQAccordion items={faqItems} />
        </FadeIn>

        <div className="mt-14 text-center">
          <h2 className="font-serif text-xl text-navy-700">Still have a question?</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-ink-400">
            Reach out directly and we will get back to you within 1–2 business days.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <PremiumLinkButton href="/contact" variant="gold" icon={ArrowRight}>
              Contact Us
            </PremiumLinkButton>
            <PremiumLinkButton href="/request-quote" variant="outline">
              Request Quote
            </PremiumLinkButton>
          </div>
        </div>
      </Container>
    </div>
  );
}
