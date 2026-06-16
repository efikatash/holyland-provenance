import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/lib/types";
import { MediaFrame } from "@/components/shared/MediaFrame";
import { Badge } from "@/components/shared/Badge";
import { PremiumLinkButton } from "@/components/shared/PremiumLinkButton";
import { getCommunityFitMeta } from "@/data/community";
import { getCollectionBySlug } from "@/data/collections";
import { getDocumentationTier, documentationTierLabels } from "@/lib/documentation-tier";

export function ProductCard({ product }: { product: Product }) {
  const collection = getCollectionBySlug(product.collectionSlug);
  const tier = getDocumentationTier(product.documentationAvailable);
  const href = `/collections/${product.collectionSlug}/${product.slug}`;

  return (
    <div className="card-lift group flex h-full flex-col overflow-hidden rounded-lg border border-stone-200 bg-ivory-100 shadow-card">
      <Link href={href} className="block" tabIndex={-1}>
        <MediaFrame
          image={product.images?.[0]}
          icon={product.placeholderIcon}
          tone={product.placeholderTone}
          label={product.name}
          caption={collection?.shortName}
          aspect="square"
          className="rounded-none"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        {collection && (
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-gold-700">
            {collection.shortName}
          </p>
        )}
        <Link href={href}>
          <h3 className="mt-1.5 font-serif text-lg leading-snug text-navy-700 group-hover:text-gold-700">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-ink-400">{product.summary}</p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {product.communityFit.map((fit) => {
            const meta = getCommunityFitMeta(fit);
            return meta ? (
              <Badge key={fit} tone="stone">
                {meta.shortLabel}
              </Badge>
            ) : null;
          })}
        </div>

        <dl className="mt-4 space-y-2.5 border-t border-stone-100 pt-4 text-xs">
          <div>
            <dt className="text-ink-400/60">Origin</dt>
            <dd className="mt-0.5 font-medium leading-snug text-navy-700">{product.originStatement}</dd>
          </div>
          <div>
            <dt className="text-ink-400/60">Documentation</dt>
            <dd className="mt-0.5 font-medium text-navy-700">{documentationTierLabels[tier]}</dd>
          </div>
          {product.indicativePriceGuide && (
            <div>
              <dt className="text-ink-400/60">Price guide</dt>
              <dd className="mt-0.5 font-medium text-navy-700">{product.indicativePriceGuide}</dd>
            </div>
          )}
        </dl>

        <div className="mt-5">
          <PremiumLinkButton
            href={`/request-quote?product=${product.slug}`}
            variant="outline"
            size="sm"
            className="w-full justify-center"
            icon={ArrowRight}
          >
            Request Quote
          </PremiumLinkButton>
        </div>
      </div>
    </div>
  );
}
