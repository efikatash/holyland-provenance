import type { Metadata } from "next";
import { Mail, MessageCircle, MapPin, Clock } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FadeIn } from "@/components/shared/Motion";
import { ContactForm } from "@/components/forms/ContactForm";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Holy Land Provenance — questions, wholesale inquiries, church orders, or general support.",
};

const contactPoints = [
  { icon: Mail, label: "Email", value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
  { icon: MessageCircle, label: "WhatsApp", value: siteConfig.contact.whatsapp, href: siteConfig.contact.whatsappHref },
  { icon: MapPin, label: "Location", value: siteConfig.contact.location, href: undefined },
  { icon: Clock, label: "Hours", value: siteConfig.contact.hours, href: undefined },
];

export default function ContactPage() {
  return (
    <div className="bg-ivory py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="We're glad to hear from you"
          description="Questions about a product, a bulk order, a reseller partnership, or our documentation — reach out and we will respond within 1–2 business days."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <FadeIn>
            <div className="space-y-4">
              {contactPoints.map((point) => {
                const Icon = point.icon;
                const inner = (
                  <div className="flex items-start gap-4 rounded-lg border border-stone-200 bg-ivory-100 p-5">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-navy-700/5 text-gold-700">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-ink-400/60">{point.label}</p>
                      <p className="mt-0.5 font-medium text-navy-700">{point.value}</p>
                    </div>
                  </div>
                );
                return point.href ? (
                  <a key={point.label} href={point.href} className="block transition-opacity hover:opacity-80">
                    {inner}
                  </a>
                ) : (
                  <div key={point.label}>{inner}</div>
                );
              })}
            </div>

            <div className="mt-6">
              <ImagePlaceholder
                icon="map"
                tone="stone"
                label="Cebu, Philippines"
                caption="Holy Land Provenance"
                aspect="landscape"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="rounded-xl border border-stone-200 bg-ivory-100 p-6 shadow-card sm:p-10">
            <h2 className="font-serif text-2xl text-navy-700">Send a Message</h2>
            <p className="mt-2 text-sm text-ink-400">
              For quotes with specific products and quantities, use Request Quote instead — it captures the
              details we need to respond faster.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </Container>
    </div>
  );
}
