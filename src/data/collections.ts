import type { Collection } from "@/lib/types";

export const collections: Collection[] = [
  {
    slug: "shofars",
    name: "Shofars from the Holy Land",
    shortName: "Shofars",
    eyebrow: "Collection I — Worship & Ministry",
    tagline: "Prepared in the Holy Land from natural horn, for worship, teaching, and ceremony.",
    description:
      "Yemenite Kudu and Ram's Horn shofars prepared in the Holy Land, in polished and natural finishes, sized for personal devotion through congregational ministry.",
    longDescription: [
      "The shofar is among the oldest instruments named in Scripture, sounded for worship, gathering, and proclamation. Each shofar in this collection is prepared in the Holy Land from natural horn, inspected for soundness, and sized for everything from personal devotion to platform ministry.",
      "Because landed cost depends on size, finish, shipping method, and order quantity, shofars are offered by request for quote rather than fixed online price. A member of our team will confirm exact specifications, available documentation, and total landed cost before you order.",
    ],
    communityFit: ["pentecostal-evangelical", "gift-shop-distributor"],
    heroImage: {
      src: "/images/shofars/yemenite-kudu-shofar-natural.jpg",
      alt: "Natural Yemenite Kudu shofar displayed on a stand against a plain background",
    },
    galleryImages: [
      {
        src: "/images/shofars/rams-horn-shofar-natural-side.jpg",
        alt: "Classic natural ram's horn shofar with traditional curve",
      },
      {
        src: "/images/shofars/bavli-rams-horn-shofar-dark-stand.jpg",
        alt: "Bavli-style ram's horn shofar in a dark polished finish on a display stand",
      },
      {
        src: "/images/shofars/kudu-shofar-silver-adorned-full.jpg",
        alt: "Long kudu shofar with silver ceremonial adornment",
      },
      {
        src: "/images/shofars/shofar-personalized-engraving-lifestyle.jpg",
        alt: "Shofar with optional personalized name engraving",
      },
    ],
    placeholderIcon: "shofar",
    placeholderTone: "wood",
  },
  {
    slug: "anointing-oils",
    name: "Anointing Oils from the Holy Land",
    shortName: "Anointing Oils",
    eyebrow: "Collection II — Prayer & Dedication",
    tagline: "Holy Land botanical oils prepared for prayer, worship, and personal devotion.",
    description:
      "Frankincense & Myrrh, Spikenard, Cedar of Lebanon, Rose of Sharon, and King David blends, bottled for prayer, dedication, and ministry gifting. For external devotional use only.",
    longDescription: [
      "These botanical blends are prepared in the Holy Land and bottled for devotional use — anointing in prayer, dedications, ordinations, and ministry gifting. Each scent draws its name from Scripture and the land itself.",
      "In keeping with respectful, honest representation, these oils are described for external devotional and ceremonial use only. We make no medical claims and no promise of guaranteed spiritual outcome.",
    ],
    communityFit: ["pentecostal-evangelical", "catholic", "gift-shop-distributor"],
    heroImage: {
      src: "/images/anointing-oils/anointing-oils-catalog.png",
      alt: "Anointing oils from the Holy Land — Frankincense & Myrrh, Spikenard, Rose of Sharon, Cedar of Lebanon, and King David blends",
    },
    galleryImages: [
      {
        src: "/images/anointing-oils/anointing-oils-catalog.png",
        alt: "Full anointing oil collection: seven Holy Land botanical blends in 12ml, 30ml, and 100ml bottles",
      },
    ],
    placeholderIcon: "oil-bottle",
    placeholderTone: "navy",
  },
  {
    slug: "bible-study-collection",
    name: "Holy Land Bible Study Collection",
    shortName: "Bible Study Collection",
    eyebrow: "Collection III — Study & Appreciation",
    tagline: "Text-only, Bible-centered study and appreciation gifts.",
    description:
      "Journals, pen sets, bookmarks, and olive wood desk accessories designed respectfully for the Iglesia Ni Cristo community — practical, text-only, and free of imagery or ritual objects.",
    longDescription: [
      "This collection was built specifically for Iglesia Ni Cristo members, church administrators, and appreciation-gift buyers who want meaningful, well-made items for study and gifting — without crosses, statues, icons, or ritual objects.",
      "Every item is text-only and Bible-centered: journals and notebooks for sermon notes and personal study, olive wood desk accessories, and clean scripture card sets, all presented with the same documentation and care as the rest of our Holy Land catalog.",
    ],
    communityFit: ["inc", "gift-shop-distributor"],
    heroImage: {
      src: "/images/bible-study/bible-study-collection-overview-b.png",
      alt: "Holy Land Bible Study Collection overview spread of journals, pen sets, and bookmarks",
    },
    galleryImages: [
      {
        src: "/images/bible-study/bible-study-collection-overview-a.png",
        alt: "Holy Land Bible Study Collection alternate overview spread",
      },
      {
        src: "/images/bible-study/bible-study-personal-essentials.png",
        alt: "Personal study essentials including sermon notes notebook and pen sets",
      },
      {
        src: "/images/bible-study/bible-study-desk-accessories.png",
        alt: "Olive wood desk and home study accessories",
      },
    ],
    placeholderIcon: "journal",
    placeholderTone: "olive",
  },
  {
    slug: "catholic-devotional-keepsakes",
    name: "Catholic Devotional Keepsakes",
    shortName: "Devotional Keepsakes",
    eyebrow: "Collection IV — Devotional Gifts",
    tagline: "Small, respectful Holy Land gifts for devotional use and church gift shops.",
    description:
      "Olive wood rosaries and crosses, small anointing oil bottles, prayer cards, and gift sets sized for parish gift shops, Basilica and Cathedral outlets, and personal keepsakes.",
    longDescription: [
      "Sized and priced for devotional retail — parish gift shops, Cathedral and Basilica outlets, and personal keepsakes — this collection presents small, respectful Holy Land items with the documentation your customers and your buyers expect.",
      "Each item ships with respectful packaging suited to gifting, along with the origin documentation appropriate to its size and price point.",
    ],
    communityFit: ["catholic", "gift-shop-distributor"],
    heroImage: {
      src: "/images/catholic/catholic-crosses-catalog.png",
      alt: "Holy Land olive wood crosses — Small, Medium, Large, Wall Cross with Jerusalem Stone, and Pastor Desk Cross",
    },
    galleryImages: [
      {
        src: "/images/catholic/catholic-crosses-catalog.png",
        alt: "Olive wood cross collection: five sizes and styles from the Holy Land",
      },
      {
        src: "/images/catholic/catholic-devotional-catalog.png",
        alt: "Ministry and devotional items: Holy Communion Set, Bible Verse Bookmark, Jerusalem Wall Plaque, Prayer Cards, Olive Wood Prayer Box, Holy Land Gift Set",
      },
      {
        src: "/images/catholic/catholic-additional-catalog.png",
        alt: "Additional Holy Land keepsakes: Olive Wood Communion Bread Plate, Pastor Appreciation Gift Set, Olive Wood Holding Cross, Jerusalem Stone Keepsake, Scripture Plaque",
      },
    ],
    placeholderIcon: "rosary",
    placeholderTone: "stone",
  },
];

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}
