import Link from "next/link";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import type { Product } from "@/lib/types";
import { MediaFrame } from "@/components/shared/MediaFrame";
import { Badge } from "@/components/shared/Badge";
import { DisclaimerBox } from "@/components/shared/DisclaimerBox";
import { PremiumLinkButton } from "@/components/shared/PremiumLinkButton";
import { Container } from "@/components/shared/Container";
import { FadeIn } from "@/components/shared/Motion";
import { getCommunityFitMeta } from "@/data/community";
import { getCollectionBySlug } from "@/data/collections";
import { getDocumentationTier, documentationTierLabels } from "@/lib/documentation-tier";

export function ProductDetail({ product }: { product: Product }) {
  const collection = getCollectionBySlug(product.collectionSlug);
  const tier = getDocumentationTier(product.documentationAvailable);
  const images = product.images;

  return (
    <div className="bg-ivory py-12 sm:py-16">
      <Container>
        <nav className="mb-8 flex items-center gap-2 text-xs text-ink-400/70">
          <Link href="/collections" className="hover:text-gold-700">
            Collections
          </Link>
          <span>/</span>
          {collection && (
            <Link href={`/collections/${collection.slug}`} className="hover:text-gold-700">
              {collection.shortName}
            </Link>
          )}
          <span>/</span>
          <span className="text-navy-700">{product.name}</span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-2">
          <FadeIn>
            <div className="grid gap-3 lg:sticky lg:top-28">
              <MediaFrame
                image={images?.[0]}
                icon={product.placeholderIcon}
                tone={product.placeholderTone}
                label={product.name}
                caption={collection?.shortName}
                aspect="square"
                priority
              />
              {images && images.length > 1 && (
                <div className="grid grid-cols-3 gap-3">
                  {images.slice(1).map((img) => (
                    <MediaFrame
                      key={img.src}
                      image={img}
                      icon={product.placeholderIcon}
                      tone={product.placeholderTone}
                      aspect="square"
                    />
                  ))}
                </div>
              )}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            {collection && (
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-700">
                {collection.name}
              </p>
            )}
            <h1 className="mt-2 text-display-sm text-navy-700 sm:text-display-md">{product.name}</h1>
            {product.sourceNote && <p className="mt-1 text-sm italic text-ink-400/70">{product.sourceNote}</p>}
            <p className="mt-4 text-lg leading-relaxed text-ink-400">{product.tagline}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              <Badge tone="navy">{product.originStatement}</Badge>
              {product.communityFit.map((fit) => {
                const meta = getCommunityFitMeta(fit);
                return meta ? (
                  <Badge key={fit} tone="stone">
                    {meta.shortLabel}
                  </Badge>
                ) : null;
              })}
            </div>

            <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink-400">
              {product.description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {product.variants && product.variants.length > 0 && (
              <div className="mt-7">
                <p className="text-sm font-semibold text-navy-700">Sizes &amp; Indicative Pricing</p>
                <div className="mt-3 overflow-x-auto rounded-md border border-stone-200">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-stone-100/70 text-xs uppercase tracking-wide text-ink-400/70">
                      <tr>
                        <th className="px-4 py-2.5">Option</th>
                        <th className="px-4 py-2.5">Detail</th>
                        <th className="px-4 py-2.5 text-right">Indicative Price</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100">
                      {product.variants.map((v) => (
                        <tr key={v.label}>
                          <td className="px-4 py-2.5 font-medium text-navy-700">{v.label}</td>
                          <td className="px-4 py-2.5 text-ink-400">{v.detail ?? "—"}</td>
                          <td className="whitespace-nowrap px-4 py-2.5 text-right text-navy-700">
                            {v.indicativePricePHP ?? "—"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {product.indicativePriceGuide && (
                  <p className="mt-2 text-xs text-ink-400/60">{product.indicativePriceGuide}</p>
                )}
              </div>
            )}

            <div className="mt-7 grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-sm font-semibold text-navy-700">Suggested Use</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-400">{product.suggestedUse}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-navy-700">What&rsquo;s Included</p>
                <ul className="mt-1.5 space-y-1.5 text-sm text-ink-400">
                  {product.whatsIncluded.map((item) => (
                    <li key={item} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-olive-400" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-7 rounded-md border border-gold-300/50 bg-gold-50/50 p-5">
              <p className="text-sm font-semibold text-navy-700">
                Provenance Documentation — {documentationTierLabels[tier]}
              </p>
              <ul className="mt-2 grid gap-1.5 text-sm text-ink-400 sm:grid-cols-2">
                {product.documentationAvailable.map((doc) => (
                  <li key={doc} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-gold-600" aria-hidden="true" />
                    {doc}
                  </li>
                ))}
              </ul>
              <Link
                href="/provenance-passport"
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-gold-700 hover:underline"
              >
                Learn about the Provenance Passport <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            {product.cautionNote && (
              <DisclaimerBox className="mt-6" title="Please note">
                {product.cautionNote}
              </DisclaimerBox>
            )}

            <DisclaimerBox className="mt-4" tone="muted" title="Shipping & landed cost">
              Final landed cost depends on size, weight, shipping method, and order quantity. Request a quote for
              an exact, all-in estimate before ordering. See{" "}
              <Link href="/import-documentation" className="underline">
                Import &amp; Documentation
              </Link>{" "}
              for general, informational guidance.
            </DisclaimerBox>

            <div className="mt-8 flex flex-wrap gap-4">
              <PremiumLinkButton
                href={`/request-quote?product=${product.slug}`}
                variant="gold"
                size="lg"
                icon={ArrowRight}
              >
                Request Quote
              </PremiumLinkButton>
              <PremiumLinkButton href="/verify-product" variant="outline" size="lg">
                Verify a Product
              </PremiumLinkButton>
            </div>
          </FadeIn>
        </div>

        {product.detailNotes.length > 0 && (
          <div className="mt-20 border-t border-stone-200 pt-12">
            <h2 className="font-serif text-2xl text-navy-700">Additional Details</h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {product.detailNotes.map((note) => (
                <div key={note.label}>
                  <p className="font-serif text-base text-navy-700">{note.label}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-400">{note.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-16 flex justify-center">
          <PremiumLinkButton
            href={`/collections/${product.collectionSlug}`}
            variant="ghost"
            icon={ArrowLeft}
            iconPosition="left"
          >
            Back to {collection?.shortName ?? "Collection"}
          </PremiumLinkButton>
        </div>
      </Container>
    </div>
  );
}
