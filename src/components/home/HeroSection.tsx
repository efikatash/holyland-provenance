"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { PremiumLinkButton } from "@/components/shared/PremiumLinkButton";
import { Container } from "@/components/shared/Container";
import { JerusalemSkyline } from "@/components/shared/JerusalemSkyline";
import { resolveImageSrc } from "@/lib/utils";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-navy-gradient bg-grain pb-20 pt-14 sm:pb-28 sm:pt-20 lg:pb-32">
      <JerusalemSkyline className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 w-full text-ivory-100 opacity-[0.06]" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-gold-500/10 blur-3xl" />

      <Container className="relative grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <span className="eyebrow text-gold-400">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" /> Holy Land &rarr; Philippines
          </span>
          <h1 className="mt-4 text-balance text-[1.85rem] leading-[1.14] text-ivory-100 sm:text-display-md lg:text-display-lg xl:text-display-xl">
            Holy Land Products, Verified for the Philippines
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ivory-300/80 sm:text-lg">
            Premium Christian gifts, worship items, and Bible study products with documented Holy Land origin, batch
            records, and provenance you can verify.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <PremiumLinkButton href="/collections" variant="gold" size="lg" icon={ArrowRight} className="w-full justify-center sm:w-auto">
              Explore Collections
            </PremiumLinkButton>
            <PremiumLinkButton href="/verify-product" variant="outline-light" size="lg" className="w-full justify-center sm:w-auto">
              Verify a Product
            </PremiumLinkButton>
          </div>
          <PremiumLinkButton
            href="/request-quote#catalog"
            variant="ghost"
            size="md"
            className="mt-4 text-ivory-200 hover:text-gold-300"
          >
            Request Wholesale Catalog &rarr;
          </PremiumLinkButton>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-ivory-100/10 pt-7 sm:gap-6">
            <div>
              <dt className="font-serif text-2xl text-gold-300">4</dt>
              <dd className="mt-0.5 text-xs leading-snug text-ivory-300/70">Curated collections</dd>
            </div>
            <div>
              <dt className="font-serif text-2xl text-gold-300">100%</dt>
              <dd className="mt-0.5 text-xs leading-snug text-ivory-300/70">Documented batches</dd>
            </div>
            <div>
              <dt className="font-serif text-2xl text-gold-300">PH</dt>
              <dd className="mt-0.5 text-xs leading-snug text-ivory-300/70">Imported &amp; delivered</dd>
            </div>
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative rounded-lg border border-gold-500/25 bg-navy-800/40 p-2 shadow-2xl">
            <div className="relative overflow-hidden rounded-md">
              <Image
                src={resolveImageSrc("/images/provenance/provenance-trust-package.png")}
                alt="The Holy Land Provenance trust package: passport booklet, certificate, serial tag, QR card, and tamper-evident seal"
                width={760}
                height={950}
                className="h-auto w-full"
                priority
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20, x: -10 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}
            className="absolute -bottom-8 -left-6 hidden w-44 rounded-md border border-gold-500/30 bg-ivory-50 p-3 shadow-card-hover sm:block"
          >
            <div className="relative aspect-square overflow-hidden rounded-sm bg-ivory-200">
              <Image
                src={resolveImageSrc("/images/shofars/yemenite-kudu-shofar-natural.jpg")}
                alt="Yemenite Kudu Shofar, prepared in the Holy Land"
                fill
                className="object-contain p-2"
              />
            </div>
            <p className="mt-2 text-center text-[11px] font-semibold uppercase tracking-wide text-navy-700">
              HL-SHF-000127
            </p>
            <p className="text-center text-[10px] text-olive-500">&#10003; Verified sample record</p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
