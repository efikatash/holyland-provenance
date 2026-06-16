/**
 * Shared content types for the Holy Land Provenance website.
 * Product, collection, and provenance data are kept as typed local
 * data (see /src/data) so the catalog can later be swapped for a
 * CMS or backend without touching presentation components.
 */

/** Which Christian community / sales channel a product is appropriate for. */
export type CommunityFit =
  | "pentecostal-evangelical"
  | "catholic"
  | "inc"
  | "gift-shop-distributor";

export type CollectionSlug =
  | "shofars"
  | "anointing-oils"
  | "bible-study-collection"
  | "catholic-devotional-keepsakes";

export interface CommunityFitMeta {
  slug: CommunityFit;
  label: string;
  shortLabel: string;
  description: string;
}

export interface Collection {
  slug: CollectionSlug;
  name: string;
  shortName: string;
  eyebrow: string;
  tagline: string;
  description: string;
  longDescription: string[];
  communityFit: CommunityFit[];
  heroImage?: ProductImage;
  galleryImages?: ProductImage[];
  placeholderIcon: PlaceholderIcon;
  placeholderTone: PlaceholderTone;
}

export interface ProductVariant {
  label: string;
  detail?: string;
  indicativePricePHP?: string;
}

export interface DetailNote {
  label: string;
  body: string;
}

export interface ProductImage {
  src: string;
  alt: string;
}

export type PlaceholderTone = "navy" | "olive" | "stone" | "wood" | "ivory";

export type PlaceholderIcon =
  | "shofar"
  | "shofar-stand"
  | "oil-bottle"
  | "journal"
  | "pen-set"
  | "bookmark"
  | "bible-cover"
  | "pouch"
  | "card-set"
  | "pen-holder"
  | "card-holder"
  | "keepsake-box"
  | "book-stand"
  | "gift-box"
  | "rosary"
  | "cross"
  | "communion"
  | "plaque"
  | "stone-keepsake"
  | "certificate"
  | "qr"
  | "map"
  | "seal"
  | "display-rack"
  | "camera";

export interface Product {
  slug: string;
  collectionSlug: CollectionSlug;
  name: string;
  sourceNote?: string;
  tagline: string;
  summary: string;
  description: string[];
  communityFit: CommunityFit[];
  originStatement: string;
  suggestedUse: string;
  whatsIncluded: string[];
  documentationAvailable: string[];
  cautionNote?: string;
  variants?: ProductVariant[];
  indicativePriceGuide?: string;
  detailNotes: DetailNote[];
  images?: ProductImage[];
  placeholderIcon: PlaceholderIcon;
  placeholderTone: PlaceholderTone;
  featured?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProvenanceSampleDocument {
  label: string;
  description: string;
}

export interface ProvenanceSampleRecord {
  serial: string;
  batch: string;
  productName: string;
  collectionSlug: CollectionSlug;
  originStatement: string;
  documentedAt: string[];
  importedTo: string;
  status: string;
  preparedDate: string;
  importedDate: string;
  documents: ProvenanceSampleDocument[];
  photoCaptions: string[];
}

export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface NavGroup {
  label: string;
  href?: string;
  links: NavLink[];
}
