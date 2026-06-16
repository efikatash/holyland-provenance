export type DocumentationTier = "full" | "batch" | "origin";

export const documentationTierLabels: Record<DocumentationTier, string> = {
  full: "Full Provenance Passport",
  batch: "Batch Provenance Record",
  origin: "Origin Statement Card",
};

/**
 * Derives a documentation tier from a product's documentationAvailable list.
 * Mirrors the three tiers defined in /src/data/products.ts
 * (FULL_PASSPORT_DOCS / BATCH_RECORD_DOCS / ORIGIN_CARD_DOCS).
 */
export function getDocumentationTier(docs: string[]): DocumentationTier {
  if (docs.includes("Unique serial number")) return "full";
  if (docs.includes("Batch serial number")) return "batch";
  return "origin";
}
