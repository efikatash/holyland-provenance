"use client";

import { useMemo, useState } from "react";
import type { Product, CommunityFit } from "@/lib/types";
import { ProductCard } from "./ProductCard";
import { communityFitMeta } from "@/data/community";
import { cn } from "@/lib/utils";

/** Client-side filter (by community fit) + responsive grid of ProductCards. */
export function ProductFilterGrid({ products }: { products: Product[] }) {
  const [activeFit, setActiveFit] = useState<CommunityFit | "all">("all");

  const availableFits = useMemo(() => {
    const set = new Set<CommunityFit>();
    products.forEach((p) => p.communityFit.forEach((f) => set.add(f)));
    return communityFitMeta.filter((m) => set.has(m.slug));
  }, [products]);

  const filtered = activeFit === "all" ? products : products.filter((p) => p.communityFit.includes(activeFit));

  return (
    <div>
      {availableFits.length > 1 && (
        <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter by suitability">
          <button
            type="button"
            onClick={() => setActiveFit("all")}
            className={cn(
              "rounded-full border px-4 py-2 text-sm transition-colors",
              activeFit === "all"
                ? "border-navy-700 bg-navy-700 text-ivory-100"
                : "border-stone-300 text-navy-700 hover:border-navy-700/50"
            )}
          >
            All ({products.length})
          </button>
          {availableFits.map((fit) => {
            const count = products.filter((p) => p.communityFit.includes(fit.slug)).length;
            return (
              <button
                key={fit.slug}
                type="button"
                onClick={() => setActiveFit(fit.slug)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm transition-colors",
                  activeFit === fit.slug
                    ? "border-navy-700 bg-navy-700 text-ivory-100"
                    : "border-stone-300 text-navy-700 hover:border-navy-700/50"
                )}
              >
                {fit.shortLabel} ({count})
              </button>
            );
          })}
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-12 text-center text-sm text-ink-400">
          No products match this filter yet. Please check back soon or contact us directly.
        </p>
      )}
    </div>
  );
}
