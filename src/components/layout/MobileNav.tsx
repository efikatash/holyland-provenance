"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ShieldCheck } from "lucide-react";
import { collectionsNavGroup, primaryNav } from "@/data/nav";
import { PremiumLinkButton } from "@/components/shared/PremiumLinkButton";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="flex h-11 w-11 items-center justify-center rounded-sm text-navy-700 transition-colors hover:bg-stone-100"
      >
        <Menu className="h-5 w-5" />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[60] bg-ink/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        className={cn(
          "fixed inset-y-0 right-0 z-[70] flex w-[88%] max-w-[360px] flex-col bg-ivory-100 shadow-2xl transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between border-b border-stone-200 px-5 py-4">
          <div className="flex items-center gap-2 text-gold-700">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em]">Holy Land Provenance</span>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex h-11 w-11 items-center justify-center rounded-sm text-navy-700 transition-colors hover:bg-stone-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex flex-1 flex-col overflow-y-auto" aria-label="Mobile navigation">
          {/* Collections accordion */}
          <div className="border-b border-stone-100">
            <button
              onClick={() => setCollectionsOpen((o) => !o)}
              className="flex w-full items-center justify-between px-5 py-4 text-left text-base font-medium text-navy-700"
              aria-expanded={collectionsOpen}
            >
              Collections
              <ChevronDown
                className={cn("h-4 w-4 text-gold-600 transition-transform duration-200", collectionsOpen && "rotate-180")}
                aria-hidden="true"
              />
            </button>
            {collectionsOpen && (
              <div className="border-t border-stone-100 bg-ivory-200/60 pb-1">
                {collectionsNavGroup.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-3 px-6 py-3 text-sm text-navy-700/80 transition-colors hover:text-gold-700"
                  >
                    <span className="h-1 w-1 flex-shrink-0 rounded-full bg-gold-500/50" aria-hidden="true" />
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/collections"
                  className="flex items-center px-6 py-3 text-sm font-semibold text-gold-700 transition-colors hover:text-gold-600"
                >
                  View All Collections →
                </Link>
              </div>
            )}
          </div>

          {/* Primary nav links */}
          {primaryNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="border-b border-stone-100 px-5 py-4 text-base font-medium text-navy-700 transition-colors hover:text-gold-700"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/faq"
            className="border-b border-stone-100 px-5 py-4 text-base font-medium text-navy-700 transition-colors hover:text-gold-700"
          >
            FAQ
          </Link>
          <Link
            href="/import-documentation"
            className="border-b border-stone-100 px-5 py-4 text-base font-medium text-navy-700 transition-colors hover:text-gold-700"
          >
            Import &amp; Documentation
          </Link>
        </nav>

        {/* CTA buttons */}
        <div className="space-y-3 border-t border-stone-200 bg-ivory-50 px-5 py-5">
          <PremiumLinkButton href="/request-quote" variant="gold" className="w-full justify-center">
            Request Quote
          </PremiumLinkButton>
          <PremiumLinkButton href="/verify-product" variant="outline" className="w-full justify-center">
            Verify a Product
          </PremiumLinkButton>
        </div>
      </div>
    </div>
  );
}
