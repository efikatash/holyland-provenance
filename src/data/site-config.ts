/**
 * Central brand + contact configuration.
 *
 * REPLACE-BEFORE-LAUNCH: every value in `contact` and `social` is a
 * placeholder. Swap in the real inbox, WhatsApp number, business
 * registration details, and address before going live.
 */
export const siteConfig = {
  brandName: "Holy Land Provenance",
  shortName: "Holy Land Provenance",
  subtitle: "Israel Origin Products for Christian Communities in the Philippines",
  microcopy: "From the Holy Land to your hands, documented with integrity.",
  description:
    "Holy Land Provenance imports documented, Israel-origin Christian products — shofars, anointing oils, olive wood gifts, and Bible study collections — to churches, pastors, gift shops, and distributors across the Philippines.",
  url: "https://www.holylandprovenance.com",
  ogImage: "/images/provenance/provenance-passport-overview.png",
  contact: {
    email: "contact@holylandprovenance.com",
    wholesaleEmail: "wholesale@holylandprovenance.com",
    whatsapp: "+63 XXX XXX XXXX",
    whatsappHref: "https://wa.me/63XXXXXXXXX",
    location: "Cebu, Philippines",
    addressNote: "Cebu, Philippines — full address provided upon request for verified B2B partners.",
    hours: "Monday–Saturday, 9:00 AM–6:00 PM (PHT)",
  },
  social: {
    facebook: "https://facebook.com/holylandprovenance",
    instagram: "https://instagram.com/holylandprovenance",
  },
  legal: {
    entityNote:
      "Holy Land Provenance is a Philippines-based import and distribution initiative. Business registration details are available to verified church and trade partners upon request.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
