"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
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
        className="flex h-10 w-10 items-center justify-center text-navy-700"
      >
        <Menu className="h-6 w-6" />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[60] bg-ink-900/40"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        className={cn(
          "fixed inset-y-0 right-0 z-[70] flex w-[88%] max-w-sm transform flex-col overflow-y-auto bg-ivory-100 shadow-2xl transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
      >
        <div className="flex items-center justify-between border-b border-stone-200 p-5">
          <span className="font-serif text-lg text-navy-700">Menu</span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex h-9 w-9 items-center justify-center text-navy-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 p-5">
          <button
            onClick={() => setCollectionsOpen((o) => !o)}
            className="flex items-center justify-between border-b border-stone-100 py-3 text-left text-base font-medium text-navy-700"
            aria-expanded={collectionsOpen}
          >
            Collections
            <ChevronDown className={cn("h-4 w-4 transition-transform", collectionsOpen && "rotate-180")} />
          </button>
          {collectionsOpen && (
            <div className="flex flex-col gap-1 border-b border-stone-100 py-2 pl-3">
              {collectionsNavGroup.links.map((link) => (
                <Link key={link.href} href={link.href} className="py-2 text-sm text-ink-400">
                  {link.label}
                </Link>
              ))}
              <Link href="/collections" className="py-2 text-sm font-semibold text-gold-700">
                View All Collections
              </Link>
            </div>
          )}

          {primaryNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="border-b border-stone-100 py-3 text-base font-medium text-navy-700"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/faq" className="border-b border-stone-100 py-3 text-base font-medium text-navy-700">
            FAQ
          </Link>
          <Link href="/import-documentation" className="py-3 text-base font-medium text-navy-700">
            Import &amp; Documentation
          </Link>
        </nav>

        <div className="flex flex-col gap-3 border-t border-stone-200 p-5">
          <PremiumLinkButton href="/verify-product" variant="outline" className="w-full justify-center">
            Verify a Product
          </PremiumLinkButton>
          <PremiumLinkButton href="/request-quote" variant="gold" className="w-full justify-center">
            Request Quote
          </PremiumLinkButton>
        </div>
      </div>
    </div>
  );
}
