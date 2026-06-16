import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Collection } from "@/lib/types";
import { MediaFrame } from "@/components/shared/MediaFrame";
import { Badge } from "@/components/shared/Badge";
import { getCommunityFitMeta } from "@/data/community";

export function CollectionCard({ collection }: { collection: Collection }) {
  return (
    <Link
      href={`/collections/${collection.slug}`}
      className="card-lift group flex h-full flex-col overflow-hidden rounded-lg border border-stone-200 bg-ivory-100 shadow-card"
    >
      <MediaFrame
        image={collection.heroImage}
        icon={collection.placeholderIcon}
        tone={collection.placeholderTone}
        label={collection.shortName}
        caption="Holy Land Provenance"
        aspect="landscape"
        className="rounded-none"
      />
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-700">{collection.eyebrow}</p>
        <h3 className="mt-2 font-serif text-xl text-navy-700">{collection.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-400">{collection.description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {collection.communityFit.map((fit) => {
            const meta = getCommunityFitMeta(fit);
            return meta ? (
              <Badge key={fit} tone="stone">
                {meta.shortLabel}
              </Badge>
            ) : null;
          })}
        </div>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-700 transition-all group-hover:gap-2.5">
          View Collection <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
}
