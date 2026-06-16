import type { CommunityFitMeta } from "@/lib/types";

export const communityFitMeta: CommunityFitMeta[] = [
  {
    slug: "pentecostal-evangelical",
    label: "Pentecostal & Evangelical Churches",
    shortLabel: "Pentecostal & Evangelical",
    description: "Shofars, anointing oils, and worship gifts for pastors, ministry leaders, and congregations.",
  },
  {
    slug: "catholic",
    label: "Catholic Devotional Channels",
    shortLabel: "Catholic Devotional",
    description: "Olive wood rosaries, crosses, and keepsakes for parish gift shops and personal devotion.",
  },
  {
    slug: "inc",
    label: "Iglesia Ni Cristo Bible Study Gifts",
    shortLabel: "Bible Study Collection",
    description: "Text-only, Bible-centered study and appreciation gifts — no icons or ritual objects.",
  },
  {
    slug: "gift-shop-distributor",
    label: "Gift Shops & Distributors",
    shortLabel: "Gift Shops & Distributors",
    description: "Wholesale assortments, display-ready packaging, and reseller documentation.",
  },
];

export function getCommunityFitMeta(slug: string): CommunityFitMeta | undefined {
  return communityFitMeta.find((c) => c.slug === slug);
}
