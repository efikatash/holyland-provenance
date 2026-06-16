import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { ShieldCheck, Clock, FileCheck } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { JerusalemSkyline } from "@/components/shared/JerusalemSkyline";
import { QuoteForm } from "@/components/forms/QuoteForm";

export const metadata: Metadata = {
  title: "Request Quote",
  description:
    "Request a quote or wholesale catalog from Holy Land Provenance — for individuals, pastors, churches, gift shops, and distributors.",
};

const reassurances = [
  { icon: Clock, text: "Most quotes are returned within 1–2 business days." },
  { icon: FileCheck, text: "We will confirm which Provenance documentation applies to your order." },
  { icon: ShieldCheck, text: "No payment is collected through this form — we confirm details first." },
];

export default function RequestQuotePage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-navy-gradient bg-grain py-16 sm:py-20">
        <JerusalemSkyline className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 w-full text-ivory-100 opacity-[0.06]" />
        <Container className="relative max-w-2xl text-center">
          <span className="eyebrow text-gold-400">Request Quote</span>
          <h1 className="mt-5 text-display-sm text-balance text-ivory-100 sm:text-display-md">
            Tell us what you need — we&rsquo;ll confirm pricing and documentation
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-ivory-300/80">
            For individuals, pastors, churches, gift shops, and distributors. Landed cost depends on item,
            quantity, and shipping, so we confirm specifics by quote rather than published prices.
          </p>
        </Container>
      </section>

      <section id="catalog" className="bg-ivory py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 className="font-serif text-xl text-navy-700">What happens after you submit</h2>
            <ul className="mt-5 space-y-4">
              {reassurances.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.text} className="flex gap-3 text-sm text-ink-400">
                    <Icon className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-600" aria-hidden="true" />
                    {item.text}
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 rounded-md border border-stone-200 bg-ivory-100 p-5 text-sm text-ink-400">
              <p className="font-semibold text-navy-700">Prefer a direct line?</p>
              <p className="mt-1">
                You&rsquo;re welcome to reach us directly via the contact details in the footer, or visit our{" "}
                <Link href="/contact" className="font-semibold text-gold-700 hover:underline">
                  Contact
                </Link>{" "}
                page.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-stone-200 bg-ivory-100 p-6 shadow-card sm:p-10">
            <Suspense fallback={<p className="text-sm text-ink-400">Loading form…</p>}>
              <QuoteForm />
            </Suspense>
          </div>
        </Container>
      </section>
    </div>
  );
}
