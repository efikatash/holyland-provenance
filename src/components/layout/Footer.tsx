import Link from "next/link";
import { Mail, MessageCircle, MapPin, Facebook, Instagram } from "lucide-react";
import { Logo } from "./Logo";
import { Container } from "@/components/shared/Container";
import { OliveBranch } from "@/components/shared/OliveBranch";
import { JerusalemSkyline } from "@/components/shared/JerusalemSkyline";
import { footerNav } from "@/data/nav";
import { siteConfig } from "@/data/site-config";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-700 text-ivory-200">
      <JerusalemSkyline className="pointer-events-none absolute inset-x-0 bottom-0 h-40 w-full text-ivory-100 opacity-[0.05]" />

      <Container className="relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Logo light />
            <p className="mt-5 max-w-xs font-display text-lg italic text-gold-200/90">
              &ldquo;{siteConfig.microcopy}&rdquo;
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory-300/70">{siteConfig.description}</p>
            <div className="mt-6 flex items-center gap-2">
              <a
                href={siteConfig.social.facebook}
                className="-m-2.5 p-2.5 text-ivory-300/70 transition-colors hover:text-gold-300"
                aria-label="Holy Land Provenance on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.instagram}
                className="-m-2.5 p-2.5 text-ivory-300/70 transition-colors hover:text-gold-300"
                aria-label="Holy Land Provenance on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerNav.map((group) => (
              <div key={group.label}>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">
                  {group.label}
                </p>
                <ul className="space-y-1">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="inline-block py-1.5 text-sm text-ivory-300/75 hover:text-gold-300">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="my-10 flex justify-center text-gold-500/40">
          <OliveBranch className="h-6 w-32" />
        </div>

        <div className="grid gap-5 border-t border-ivory-100/10 pt-8 text-sm text-ivory-300/70 sm:grid-cols-3">
          <a href={`mailto:${siteConfig.contact.email}`} className="flex items-start gap-2.5 hover:text-gold-300">
            <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-400" />
            {siteConfig.contact.email}
          </a>
          <span className="flex items-start gap-2.5">
            <MessageCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-400" />
            WhatsApp: {siteConfig.contact.whatsapp}
          </span>
          <span className="flex items-start gap-2.5">
            <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-400" />
            {siteConfig.contact.location}
          </span>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-ivory-100/10 pt-6 text-xs text-ivory-300/60 sm:flex-row sm:items-start sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.
          </p>
          <p className="max-w-2xl">
            We document and import Holy Land products with integrity. We make no claims of guaranteed spiritual
            outcome, healing, or blessing for any product. See{" "}
            <Link href="/import-documentation" className="underline hover:text-gold-300">
              Import &amp; Documentation
            </Link>{" "}
            for informational guidance on customs and shipping.
          </p>
        </div>
      </Container>
    </footer>
  );
}
