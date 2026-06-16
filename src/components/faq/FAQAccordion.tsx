"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/lib/types";
import { cn } from "@/lib/utils";

function FAQAccordionItem({ item, defaultOpen = false }: { item: FaqItem; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const contentId = useId();

  return (
    <div className="border-b border-stone-200">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={contentId}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-serif text-base text-navy-700 sm:text-lg">{item.question}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 flex-shrink-0 text-gold-600 transition-transform duration-300",
            open && "rotate-180"
          )}
          aria-hidden="true"
        />
      </button>
      <div
        id={contentId}
        role="region"
        className={cn(
          "overflow-hidden transition-all duration-300 ease-out",
          open ? "max-h-[600px] pb-5 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <p className="text-sm leading-relaxed text-ink-400 sm:text-base">{item.answer}</p>
      </div>
    </div>
  );
}

export function FAQAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div>
      {items.map((item, i) => (
        <FAQAccordionItem key={item.question} item={item} defaultOpen={i === 0} />
      ))}
    </div>
  );
}
