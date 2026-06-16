import Link from "next/link";
import { ChevronDown, ShieldCheck } from "lucide-react";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";
import { Container } from "@/components/shared/Container";
import { PremiumLinkButton } from "@/components/shared/PremiumLinkButton";
import { collectionsNavGroup, primaryNav } from "@/data/nav";
import { siteConfig } from "@/data/site-config";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-ivory-100/95 backdrop-blur supports-[backdrop-filter]:bg-ivory-100/90">
      <div className="hidden border-b border-navy-900/10 bg-navy-700 lg:block">
        <Container className="flex h-9 items-center justify-between text-[11.5px]">
          <p className="font-display italic tracking-wide text-gold-200/90">
            &ldquo;{siteConfig.microcopy}&rdquo;
          </p>
          <div className="flex items-center gap-5 text-ivory-300/75">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-gold-400" aria-hidden="true" />
              QR-Verified Provenance
            </span>
            <span>{siteConfig.contact.location}</span>
          </div>
        </Container>
      </div>

      <Container className="flex h-20 items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          <div className="group relative">
            <button className="flex items-center gap-1.5 text-sm font-medium text-navy-700 transition-colors hover:text-gold-700">
              Collections
              <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-1/2 top-full z-50 w-[600px] -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="grid grid-cols-2 gap-1 rounded-md border border-stone-200 bg-ivory-50 p-3 shadow-card-hover">
                {collectionsNavGroup.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-sm p-3 transition-colors hover:bg-stone-100"
                  >
                    <p className="font-serif text-base text-navy-700">{link.label}</p>
                    <p className="mt-0.5 text-xs leading-snug text-ink-400">{link.description}</p>
                  </Link>
                ))}
                <Link
                  href="/collections"
                  className="col-span-2 mt-1 rounded-sm border-t border-stone-200 p-3 text-center text-xs font-semibold uppercase tracking-wide text-gold-700 hover:bg-stone-100"
                >
                  View All Collections
                </Link>
              </div>
            </div>
          </div>

          {primaryNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy-700 transition-colors hover:text-gold-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <PremiumLinkButton href="/verify-product" variant="outline" size="sm">
            Verify a Product
          </PremiumLinkButton>
          <PremiumLinkButton href="/request-quote" variant="gold" size="sm">
            Request Quote
          </PremiumLinkButton>
        </div>

        <MobileNav />
      </Container>
    </header>
  );
}
