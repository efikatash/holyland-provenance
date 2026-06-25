import type { NavGroup, NavLink } from "@/lib/types";

/** Primary header navigation. "Collections" renders as a mega-menu. */
export const collectionsNavGroup: NavGroup = {
  label: "Collections",
  href: "/collections",
  links: [
    {
      label: "Shofars from the Holy Land",
      href: "/collections/shofars",
      description: "Yemenite Kudu and Ram's Horn shofars, prepared in the Holy Land.",
    },
    {
      label: "Anointing Oils",
      href: "/collections/anointing-oils",
      description: "Holy Land botanical oils for prayer and dedication.",
    },
    {
      label: "Bible Study Collection",
      href: "/collections/bible-study-collection",
      description: "Text-only study and appreciation gifts for the Iglesia Ni Cristo community.",
    },
    {
      label: "Catholic Devotional Keepsakes",
      href: "/collections/catholic-devotional-keepsakes",
      description: "Olive wood rosaries, crosses, and gift-shop-ready keepsakes.",
    },
  ],
};

export const primaryNav: NavLink[] = [
  { label: "Provenance Passport", href: "/provenance-passport" },
  { label: "For Churches", href: "/for-churches" },
  { label: "Gift Shops & Distributors", href: "/gift-shops-distributors" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const headerCtas: NavLink[] = [
  { label: "Verify a Product", href: "/verify-product" },
  { label: "Request Quote", href: "/request-quote" },
];

export const footerNav: NavGroup[] = [
  {
    label: "Collections",
    links: [
      { label: "All Collections", href: "/collections" },
      { label: "Shofars from the Holy Land", href: "/collections/shofars" },
      { label: "Anointing Oils", href: "/collections/anointing-oils" },
      { label: "Bible Study Collection", href: "/collections/bible-study-collection" },
      { label: "Catholic Devotional Keepsakes", href: "/collections/catholic-devotional-keepsakes" },
    ],
  },
  {
    label: "Trust & Provenance",
    links: [
      { label: "Holy Land Provenance Passport", href: "/provenance-passport" },
      { label: "Verify a Product", href: "/verify-product" },
      { label: "Import & Documentation", href: "/import-documentation" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    label: "For Partners",
    links: [
      { label: "For Churches", href: "/for-churches" },
      { label: "Gift Shops & Distributors", href: "/gift-shops-distributors" },
      { label: "Request Quote", href: "/request-quote" },
      { label: "Request Catalog", href: "/request-quote#catalog" },
    ],
  },
  {
    label: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
