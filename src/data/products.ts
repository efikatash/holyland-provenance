import type { Product } from "@/lib/types";

/* ------------------------------------------------------------------ */
/*  Shared documentation tiers                                         */
/*  Not every item carries the same depth of paperwork — a ₱280 card   */
/*  set is batch-documented, while a flagship shofar carries a full    */
/*  individually serialized passport. See /provenance-passport.        */
/* ------------------------------------------------------------------ */

export const FULL_PASSPORT_DOCS = [
  "Unique serial number",
  "QR proof page (Verify a Product)",
  "Certificate of Holy Land Documentation",
  "Batch Journey Log",
  "Tamper-evident seal",
  "Photo and video documentation",
];

export const BATCH_RECORD_DOCS = [
  "Batch serial number",
  "Certificate of Holy Land Documentation",
  "Photo documentation from the prepared batch",
];

export const ORIGIN_CARD_DOCS = [
  "Printed origin statement card",
  "Reference number to the batch Certificate of Holy Land Documentation",
];

const SHOFAR_CAUTION =
  "Natural horn is a biological material — grain, color, and minor surface marks vary piece to piece. Photographs are representative of size and finish, not a guarantee of identical markings.";

const OIL_CAUTION =
  "For external devotional use only. Not a medical product, food, or supplement. No healing, medical benefit, or guaranteed spiritual outcome is claimed or implied.";

const INC_CAUTION =
  "Text-only and Bible-centered by design. This item contains no crosses, statues, icons, saints, or ritual objects.";

const SHOFAR_DOCS_NOTE = {
  label: "Documentation for processed horn",
  body: "Available documentation may include a supplier invoice reference, an origin statement, and — where applicable — confirmation that the species is not subject to CITES or other trade restriction. Exact documents available are confirmed at quotation.",
};

const SHOFAR_CUSTOMS_NOTE = {
  label: "Customs and import note",
  body: "Animal-horn products may require additional documentation at Philippine customs. See Import & Documentation for general guidance — final classification and clearance are determined by the relevant authorities.",
};

const SHOFAR_CARE_NOTE = {
  label: "Care instructions",
  body: "Store away from direct sunlight and humidity. Wipe with a soft, dry cloth after handling. Avoid water immersion or prolonged dampness.",
};

const SHOFAR_SOUND_TEST_NOTE = {
  label: "Sound-test video option",
  body: "For ministry and wholesale orders, a short sound-test video of the specific unit can be requested before shipment.",
};

/* ------------------------------------------------------------------ */
/*  1. Shofars from Israel                                             */
/* ------------------------------------------------------------------ */

const shofars: Product[] = [
  {
    slug: "yemenite-kudu-shofar",
    collectionSlug: "shofars",
    name: "Yemenite Kudu Shofar",
    sourceNote: "Hebrew: שופר תימני / קודו",
    tagline: "A long spiral horn favored for its deep, sustained tone.",
    summary:
      "A long-spiral kudu horn shofar prepared in Israel, offered in natural and polished finishes from personal to platform size.",
    description: [
      "The Yemenite Kudu Shofar is prized for its dramatic spiral form and deep, sustained tone. It is prepared in Israel from natural kudu horn, inspected for soundness, and finished in either a natural or polished presentation.",
      "Because each horn is a natural material, exact length, curl, and coloring vary piece to piece. Sizing below is offered as a guide — exact specifications are confirmed at quotation.",
    ],
    communityFit: ["pentecostal-evangelical", "gift-shop-distributor"],
    originStatement: "Handcrafted and prepared in Israel from natural kudu horn.",
    suggestedUse: "For prayer, worship, teaching, and meaningful gifting to pastors and ministry leaders.",
    whatsIncluded: [
      "Inspected, ready-to-sound shofar",
      "Care and playing instruction card",
      "Origin documentation appropriate to order tier",
    ],
    documentationAvailable: FULL_PASSPORT_DOCS,
    cautionNote: SHOFAR_CAUTION,
    variants: [
      { label: "Small (10–14 in)", detail: "Personal devotion and beginners", indicativePricePHP: "₱6,800–₱8,800" },
      { label: "Medium (15–20 in)", detail: "Regular worship and small-group use", indicativePricePHP: "₱9,800–₱14,800" },
      { label: "Large (21–29 in)", detail: "Congregational and ministry use", indicativePricePHP: "₱16,800–₱21,800" },
      { label: "Extra Large (30 in and above)", detail: "Statement piece for ceremony and platform ministry", indicativePricePHP: "₱22,800–₱28,800" },
    ],
    indicativePriceGuide: "₱6,800–₱28,800 indicative, per unit, before freight, insurance, and customs.",
    detailNotes: [
      {
        label: "Natural horn variation",
        body: "Color, grain, and curl are unique to each horn. The piece you receive will match the size and finish ordered, though not necessarily the exact markings shown in photographs.",
      },
      {
        label: "Size note",
        body: "Length is measured along the outer curve. We recommend choosing a size by intended use — personal, small group, or congregational — rather than length alone.",
      },
      SHOFAR_SOUND_TEST_NOTE,
      SHOFAR_DOCS_NOTE,
      SHOFAR_CUSTOMS_NOTE,
      SHOFAR_CARE_NOTE,
    ],
    images: [
      { src: "/images/shofars/yemenite-kudu-shofar-natural.jpg", alt: "Natural Yemenite Kudu shofar displayed on a stand" },
      { src: "/images/shofars/kudu-shofar-silver-adorned-full.jpg", alt: "Kudu shofar finished with ceremonial silver adornment" },
    ],
    placeholderIcon: "shofar",
    placeholderTone: "wood",
    featured: true,
  },
  {
    slug: "classic-rams-horn-shofar",
    collectionSlug: "shofars",
    name: "Classic Ram's Horn Shofar",
    sourceNote: "Hebrew: שופר אייל",
    tagline: "The traditional curved shofar, in natural and polished finishes.",
    summary:
      "The traditional curved ram's horn shofar, prepared in Israel and sized from personal devotion to congregational ministry.",
    description: [
      "The Ram's Horn Shofar carries the traditional curved silhouette most associated with shofar worship. Each horn is prepared in Israel and offered in a natural or polished finish.",
      "Its clear, accessible tone makes this the most commonly requested shofar for churches building a worship or teaching collection.",
    ],
    communityFit: ["pentecostal-evangelical", "gift-shop-distributor"],
    originStatement: "Handcrafted and prepared in Israel from natural ram's horn.",
    suggestedUse: "For prayer, worship, teaching, and meaningful gifting to pastors and ministry leaders.",
    whatsIncluded: [
      "Inspected, ready-to-sound shofar",
      "Care and playing instruction card",
      "Origin documentation appropriate to order tier",
    ],
    documentationAvailable: FULL_PASSPORT_DOCS,
    cautionNote: SHOFAR_CAUTION,
    variants: [
      { label: "Small (10–12 in)", detail: "Great for personal devotion and beginners", indicativePricePHP: "₱5,800" },
      { label: "Medium (13–15 in)", detail: "Rich, clear sound, ideal for worship leaders", indicativePricePHP: "₱8,800" },
      { label: "Large (16–20 in)", detail: "Powerful sound for church and ministry use", indicativePricePHP: "₱12,800" },
      { label: "Extra Large (21 in and above)", detail: "Commanding presence for ceremony", indicativePricePHP: "₱15,800–₱18,800" },
    ],
    indicativePriceGuide: "₱5,800–₱18,800 indicative, per unit, before freight, insurance, and customs.",
    detailNotes: [
      {
        label: "Natural horn variation",
        body: "Color, grain, and curl are unique to each horn. The piece you receive will match the size and finish ordered, though not necessarily the exact markings shown in photographs.",
      },
      {
        label: "Size note",
        body: "Length is measured along the outer curve. For first-time congregational buyers, our team is glad to recommend a size by use case.",
      },
      SHOFAR_SOUND_TEST_NOTE,
      SHOFAR_DOCS_NOTE,
      SHOFAR_CUSTOMS_NOTE,
      SHOFAR_CARE_NOTE,
    ],
    images: [
      { src: "/images/shofars/rams-horn-shofar-natural-side.jpg", alt: "Classic natural ram's horn shofar with traditional curve" },
      { src: "/images/shofars/rams-horn-shofar-light-natural-stand.jpg", alt: "Light natural ram's horn shofar displayed on an acrylic stand" },
      { src: "/images/shofars/rams-horn-shofar-natural-detail.jpg", alt: "Detail view of a natural ram's horn shofar surface and curve" },
      { src: "/images/shofars/shofar-personalized-engraving-lifestyle.jpg", alt: "Ram's horn shofar with optional personalized name engraving" },
    ],
    placeholderIcon: "shofar",
    placeholderTone: "wood",
  },
  {
    slug: "bavli-rams-horn-shofar",
    collectionSlug: "shofars",
    name: "Bavli Ram's Horn Shofar",
    sourceNote: "Hebrew: שופר אייל בבלי — also called Babylonian-Style Ram's Horn Shofar",
    tagline: "A deeply curved ram's horn shofar in the Babylonian style.",
    summary:
      "A Babylonian-style ram's horn shofar with a more dramatic curve, prepared in Israel in natural and polished finishes.",
    description: [
      "The Bavli (Babylonian-style) Ram's Horn Shofar is shaped with a deeper, more dramatic curve than the classic form. It is prepared in Israel and finished naturally or polished, with the same care and inspection as the rest of our shofar collection.",
      "Many ministry leaders choose the Bavli style for its distinctive silhouette alongside a classic ram's horn or kudu shofar.",
    ],
    communityFit: ["pentecostal-evangelical", "gift-shop-distributor"],
    originStatement: "Handcrafted and prepared in Israel from natural ram's horn, in the Babylonian style.",
    suggestedUse: "For prayer, worship, teaching, and meaningful gifting to pastors and ministry leaders.",
    whatsIncluded: [
      "Inspected, ready-to-sound shofar",
      "Care and playing instruction card",
      "Origin documentation appropriate to order tier",
    ],
    documentationAvailable: FULL_PASSPORT_DOCS,
    cautionNote: SHOFAR_CAUTION,
    variants: [
      { label: "Small (10–12 in)", detail: "Personal devotion and beginners", indicativePricePHP: "₱6,800" },
      { label: "Medium (13–15 in)", detail: "Worship leaders and small groups", indicativePricePHP: "₱9,800" },
      { label: "Large (16–20 in)", detail: "Church and ministry use", indicativePricePHP: "₱13,800" },
      { label: "Extra Large (21 in and above)", detail: "Ceremonial statement piece", indicativePricePHP: "₱17,800–₱20,800" },
    ],
    indicativePriceGuide: "₱6,800–₱20,800 indicative, per unit, before freight, insurance, and customs.",
    detailNotes: [
      {
        label: "Natural horn variation",
        body: "Color, grain, and curl are unique to each horn, and the Bavli curve varies more than the classic form by nature of its shape.",
      },
      {
        label: "Size note",
        body: "Length is measured along the outer curve, which reads visually longer than classic ram's horn shofars of comparable size due to the deeper bend.",
      },
      SHOFAR_SOUND_TEST_NOTE,
      SHOFAR_DOCS_NOTE,
      SHOFAR_CUSTOMS_NOTE,
      SHOFAR_CARE_NOTE,
    ],
    images: [
      { src: "/images/shofars/bavli-rams-horn-shofar-dark-stand.jpg", alt: "Dark Bavli-style ram's horn shofar on a display stand" },
      { src: "/images/shofars/shofar-silver-star-of-david-small.png", alt: "Ram's horn shofar finished with silver Star of David adornment" },
      { src: "/images/shofars/rams-horn-shofar-silver-star-stand.jpg", alt: "Ram's horn shofar with silver Star of David adornment on a display stand" },
      { src: "/images/shofars/shofar-silver-wrapped-full.jpg", alt: "Fully silver-wrapped ceremonial ram's horn shofar" },
    ],
    placeholderIcon: "shofar",
    placeholderTone: "wood",
  },
  {
    slug: "shofar-display-stand",
    collectionSlug: "shofars",
    name: "Shofar Display Stand",
    tagline: "A dignified stand for display and proper keeping.",
    summary:
      "A wooden display stand sized for shofar storage and presentation at home, church, or gift shop counter.",
    description: [
      "A simple, dignified stand for keeping a shofar safely displayed between uses — at home, on a church platform, or at a gift shop counter.",
      "Sized to fit small through extra-large shofars; let us know your shofar size when requesting a quote so we can confirm fit.",
    ],
    communityFit: ["pentecostal-evangelical", "gift-shop-distributor"],
    originStatement: "Prepared in Israel to accompany shofar orders.",
    suggestedUse: "For respectful display and protective storage between uses.",
    whatsIncluded: ["Wooden display stand", "Care card"],
    documentationAvailable: BATCH_RECORD_DOCS,
    variants: [
      { label: "Standard", detail: "Fits small to large shofars", indicativePricePHP: "₱1,200–₱1,500" },
      { label: "Extended", detail: "Fits extra-large and ceremonial shofars", indicativePricePHP: "₱1,600–₱1,800" },
    ],
    indicativePriceGuide: "₱1,200–₱1,800 indicative, per unit.",
    detailNotes: [
      { label: "Material", body: "Finished wood construction designed to cradle the natural curve of the horn without contact stress on the bell or mouthpiece." },
      SHOFAR_CARE_NOTE,
    ],
    placeholderIcon: "shofar-stand",
    placeholderTone: "wood",
  },
];

/* ------------------------------------------------------------------ */
/*  2. Anointing Oils from the Holy Land                               */
/* ------------------------------------------------------------------ */

const oilVariants = [
  { label: "12 ml Bottle", detail: "Personal devotional size", indicativePricePHP: "₱650" },
  { label: "30 ml Bottle", detail: "Ministry and small-group size", indicativePricePHP: "₱1,200" },
  { label: "100 ml Ministry Bottle", detail: "Refill size for ongoing ministry use", indicativePricePHP: "₱2,800" },
];

const OIL_DOC_NOTE = {
  label: "External devotional use only",
  body: "This product is prepared and labeled for external devotional and ceremonial use. It is not a medical product, food, or supplement, and no healing or medical claim is made.",
};

const OIL_PACKAGING_NOTE = {
  label: "Packaging notes",
  body: "Bottled in glass with a roller or dropper cap depending on size, labeled with scent name and devotional-use-only wording, and boxed for safe transit.",
};

const OIL_IMPORT_NOTE = {
  label: "Import compliance note",
  body: "Botanical oils are shipped with supplier documentation appropriate to their classification. Quantities above personal-use thresholds may require additional import paperwork — see Import & Documentation.",
};

function oilProduct(args: {
  slug: string;
  name: string;
  tagline: string;
  scentNote: string;
  summary: string;
  paragraph2: string;
  featured?: boolean;
}): Product {
  return {
    slug: args.slug,
    collectionSlug: "anointing-oils",
    name: args.name,
    tagline: args.tagline,
    summary: args.summary,
    description: [
      `${args.name} is prepared in the Holy Land and bottled for prayer, dedication, and personal or ministry devotion. ${args.scentNote}`,
      args.paragraph2,
    ],
    communityFit: ["pentecostal-evangelical", "catholic", "gift-shop-distributor"],
    originStatement: "Prepared in Israel from botanical sources, bottled for devotional use.",
    suggestedUse: "For prayer, dedication, and personal or ministry devotion. For external devotional use only.",
    whatsIncluded: ["Labeled bottle in your selected size", "Devotional-use-only labeling", "Origin documentation appropriate to order tier"],
    documentationAvailable: BATCH_RECORD_DOCS,
    cautionNote: OIL_CAUTION,
    variants: oilVariants,
    indicativePriceGuide: "₱650–₱2,800 indicative, per bottle, depending on size.",
    detailNotes: [
      OIL_DOC_NOTE,
      { label: "Scent notes", body: args.scentNote },
      OIL_PACKAGING_NOTE,
      OIL_IMPORT_NOTE,
    ],
    placeholderIcon: "oil-bottle",
    placeholderTone: "navy",
    featured: args.featured,
  };
}

const anointingOils: Product[] = [
  oilProduct({
    slug: "frankincense-myrrh-anointing-oil",
    name: "Frankincense & Myrrh Anointing Oil",
    tagline: "A warm, resinous blend rooted in Scripture's most recognized offering.",
    scentNote: "Its scent profile is warm, resinous, and traditional — the pairing named in Scripture's nativity account.",
    summary: "A warm, resinous Frankincense & Myrrh blend, bottled in Israel for prayer and dedication.",
    paragraph2: "A frequent first choice for churches building a devotional oil set, often paired with Cedar of Lebanon or King David.",
  }),
  oilProduct({
    slug: "spikenard-anointing-oil",
    name: "Spikenard Anointing Oil",
    tagline: "An earthy, aromatic oil named in the Gospels.",
    scentNote: "Its scent profile is earthy and deeply aromatic, drawn from the plant named in the Gospel accounts of anointing.",
    summary: "An earthy Spikenard blend, bottled in Israel for prayer, worship, and personal devotion.",
    paragraph2: "Often requested by congregations and Bible study groups studying the Gospel anointing narratives.",
  }),
  oilProduct({
    slug: "cedar-of-lebanon-anointing-oil",
    name: "Cedar of Lebanon Anointing Oil",
    tagline: "A grounding, woody scent drawn from Scripture's cedar.",
    scentNote: "Its scent profile is woody and grounding, referencing the cedar named throughout the Hebrew Scriptures.",
    summary: "A grounding Cedar of Lebanon blend, bottled in Israel for prayer and ministry use.",
    paragraph2: "A popular choice for pastor appreciation gifts and ordination ceremonies.",
  }),
  oilProduct({
    slug: "rose-of-sharon-anointing-oil",
    name: "Rose of Sharon Anointing Oil",
    tagline: "A floral blend named for Scripture's Rose of Sharon.",
    scentNote: "Its scent profile is floral and gentle, named for the Rose of Sharon referenced in the Song of Songs.",
    summary: "A floral Rose of Sharon blend, bottled in Israel for personal and ministry devotion.",
    paragraph2: "Frequently chosen as a gift for women's ministry leaders and dedication ceremonies.",
  }),
  oilProduct({
    slug: "king-david-anointing-oil",
    name: "King David Anointing Oil",
    tagline: "A signature ministry blend inspired by Israel's anointed king.",
    scentNote: "Its scent profile is a rich, signature house blend, prepared as a ministry-grade devotional oil.",
    summary: "A signature King David blend, bottled in Israel and favored for pastoral and ministry use.",
    paragraph2: "Our most frequently requested blend for pastor appreciation gifts and ministry leadership gatherings.",
    featured: true,
  }),
];

/* ------------------------------------------------------------------ */
/*  3. Holy Land Bible Study Collection (Iglesia Ni Cristo-safe)        */
/* ------------------------------------------------------------------ */

function incProduct(args: {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  paragraph2: string;
  whatsIncluded: string[];
  documentationAvailable?: string[];
  indicativePriceGuide: string;
  variants?: Product["variants"];
  placeholderIcon: Product["placeholderIcon"];
  placeholderTone: Product["placeholderTone"];
  featured?: boolean;
}): Product {
  return {
    slug: args.slug,
    collectionSlug: "bible-study-collection",
    name: args.name,
    tagline: args.tagline,
    summary: args.summary,
    description: [
      `${args.name} is part of the Holy Land Bible Study Collection — designed respectfully for Iglesia Ni Cristo members, church administrators, and appreciation-gift buyers.`,
      args.paragraph2,
    ],
    communityFit: ["inc", "gift-shop-distributor"],
    originStatement: "Prepared and documented in the Holy Land; text-only and Bible-centered by design.",
    suggestedUse: "For personal study, sermon and lesson preparation, and respectful appreciation gifting.",
    whatsIncluded: args.whatsIncluded,
    documentationAvailable: args.documentationAvailable ?? BATCH_RECORD_DOCS,
    cautionNote: INC_CAUTION,
    variants: args.variants,
    indicativePriceGuide: args.indicativePriceGuide,
    detailNotes: [
      { label: "Text-only design", body: "No crosses, statues, icons, saints, or ritual imagery appear anywhere on this item or its packaging." },
      { label: "Practical, everyday use", body: "Designed for personal study, note-taking, and gifting — built for daily use rather than display." },
      { label: "Respectful presentation", body: "Packaging is clean and minimal, suited for member appreciation events and church administration gifting." },
    ],
    placeholderIcon: args.placeholderIcon,
    placeholderTone: args.placeholderTone,
    featured: args.featured,
  };
}

const bibleStudyCollection: Product[] = [
  incProduct({
    slug: "bible-study-journal",
    name: "Bible Study Journal",
    tagline: "An elegant notebook for worship notes and Scripture study.",
    summary: "An elegant, durable journal for personal Scripture study and worship notes.",
    paragraph2: "Lined pages and a sturdy cover make it suited to daily use over months of study.",
    whatsIncluded: ["Bound journal with lined pages", "Protective sleeve"],
    documentationAvailable: FULL_PASSPORT_DOCS,
    indicativePriceGuide: "₱1,450 indicative, per unit.",
    placeholderIcon: "journal",
    placeholderTone: "olive",
    featured: true,
  }),
  incProduct({
    slug: "sermon-notes-notebook",
    name: "Sermon Notes Notebook",
    tagline: "A compact notebook for worship and Bible lesson notes.",
    summary: "A compact notebook sized for note-taking during worship services and Bible lessons.",
    paragraph2: "Slim enough to carry to every service, with a simple, durable cover.",
    whatsIncluded: ["Bound notebook", "Protective sleeve"],
    indicativePriceGuide: "₱950 indicative, per unit.",
    placeholderIcon: "journal",
    placeholderTone: "olive",
  }),
  incProduct({
    slug: "premium-pen-set",
    name: "Premium Pen Set",
    tagline: "Refined writing instruments for study and gifting.",
    summary: "A refined pen set presented in a gift box, suited to study and formal appreciation gifting.",
    paragraph2: "A practical, dignified gift for church administrators, group leaders, and members alike.",
    whatsIncluded: ["Two premium pens", "Presentation gift box"],
    indicativePriceGuide: "₱1,650 indicative, per set.",
    placeholderIcon: "pen-set",
    placeholderTone: "navy",
  }),
  incProduct({
    slug: "scripture-bookmark-set",
    name: "Scripture Bookmark Set",
    tagline: "Text-only verse bookmarks with a clean, minimalist design.",
    summary: "A set of olive wood bookmarks, each printed with a Scripture reference in a clean, text-only layout.",
    paragraph2: "Sized to mark multiple study passages at once, with no imagery beyond the printed verse text.",
    whatsIncluded: ["Set of bookmarks (quantity confirmed at quotation)"],
    documentationAvailable: ORIGIN_CARD_DOCS,
    indicativePriceGuide: "₱350 indicative, per set.",
    placeholderIcon: "bookmark",
    placeholderTone: "wood",
  }),
  incProduct({
    slug: "bible-cover",
    name: "Bible Cover",
    tagline: "A classic, protective cover for daily Bible use.",
    summary: "A classic protective cover sized for everyday Bible carry and use.",
    paragraph2: "Clean construction with no imagery, suited to daily handling at home or at services.",
    whatsIncluded: ["Bible cover (size confirmed at quotation)"],
    indicativePriceGuide: "₱1,250 indicative, per unit.",
    placeholderIcon: "bible-cover",
    placeholderTone: "olive",
  }),
  incProduct({
    slug: "bible-carry-pouch",
    name: "Bible Carry Pouch",
    tagline: "A slim, protective pouch for Bible and notes.",
    summary: "A slim zippered pouch sized to carry a Bible together with a notebook and pen.",
    paragraph2: "Practical for members traveling to services, group studies, or fellowship gatherings.",
    whatsIncluded: ["Zippered carry pouch"],
    indicativePriceGuide: "₱1,450 indicative, per unit.",
    placeholderIcon: "pouch",
    placeholderTone: "olive",
  }),
  incProduct({
    slug: "study-organizer-pouch",
    name: "Study Organizer Pouch",
    tagline: "A practical pouch for pens, notes, and Bible accessories.",
    summary: "A practical organizer pouch for pens, note cards, tabs, and small study accessories.",
    paragraph2: "Keeps study tools tidy and ready for sermon notes or personal devotion time.",
    whatsIncluded: ["Organizer pouch with interior compartments"],
    indicativePriceGuide: "₱1,150 indicative, per unit.",
    placeholderIcon: "pouch",
    placeholderTone: "stone",
  }),
  incProduct({
    slug: "scripture-card-collection",
    name: "Scripture Card Collection",
    tagline: "Portable, text-only encouragement cards.",
    summary: "A portable set of text-only Scripture cards for encouragement and memorization.",
    paragraph2: "Sized to carry in a pocket, bag, or study pouch — text only, with clean minimalist typography.",
    whatsIncluded: ["Card set (quantity confirmed at quotation)", "Small keepsake holder"],
    documentationAvailable: ORIGIN_CARD_DOCS,
    indicativePriceGuide: "₱280 indicative, per set.",
    placeholderIcon: "card-set",
    placeholderTone: "ivory",
  }),
  incProduct({
    slug: "study-tabs-note-cards-kit",
    name: "Study Tabs and Note Cards Kit",
    tagline: "Organized tabs and cards for page marking and study prompts.",
    summary: "A kit of page tabs and prompt cards for organizing personal Bible study sessions.",
    paragraph2: "Helps members mark passages and structure study time without writing directly in their Bible.",
    whatsIncluded: ["Set of page tabs", "Set of prompt cards"],
    documentationAvailable: ORIGIN_CARD_DOCS,
    indicativePriceGuide: "₱320 indicative, per kit.",
    placeholderIcon: "card-set",
    placeholderTone: "ivory",
  }),
  incProduct({
    slug: "olive-wood-pen-holder",
    name: "Olive Wood Pen Holder",
    tagline: "A handcrafted desk organizer from genuine olive wood.",
    summary: "A handcrafted pen holder turned from genuine Holy Land olive wood.",
    paragraph2: "A simple, dignified desk accessory for pastors, administrators, and members alike.",
    whatsIncluded: ["Olive wood pen holder"],
    indicativePriceGuide: "₱750 indicative, per unit.",
    placeholderIcon: "pen-holder",
    placeholderTone: "wood",
  }),
  incProduct({
    slug: "olive-wood-card-holder",
    name: "Olive Wood Card Holder",
    tagline: "A small holder for verse cards or desk notes.",
    summary: "A small olive wood holder sized for a Scripture card or short desk note.",
    paragraph2: "Pairs naturally with the Scripture Card Collection for a complete desk set.",
    whatsIncluded: ["Olive wood card holder"],
    indicativePriceGuide: "₱650 indicative, per unit.",
    placeholderIcon: "card-holder",
    placeholderTone: "wood",
  }),
  incProduct({
    slug: "olive-wood-keepsake-box",
    name: "Olive Wood Keepsake Box",
    tagline: "A handcrafted box for treasured study items.",
    summary: "A handcrafted olive wood box sized to keep small treasured study items or keepsake cards.",
    paragraph2: "A clean, text-free design appropriate for member appreciation gifting.",
    whatsIncluded: ["Olive wood keepsake box"],
    indicativePriceGuide: "₱950 indicative, per unit.",
    placeholderIcon: "keepsake-box",
    placeholderTone: "wood",
  }),
  incProduct({
    slug: "bible-stand-book-rest",
    name: "Bible Stand / Book Rest",
    tagline: "A clean wooden stand for reading and study at home.",
    summary: "A clean wooden stand sized to hold a Bible or study book open at home or on a desk.",
    paragraph2: "Built for daily use, supporting longer reading and study sessions in comfort.",
    whatsIncluded: ["Wooden book stand"],
    indicativePriceGuide: "₱1,350 indicative, per unit.",
    placeholderIcon: "book-stand",
    placeholderTone: "wood",
  }),
  incProduct({
    slug: "executive-journal-gift-set",
    name: "Executive Journal Gift Set",
    tagline: "A refined journal and pen set, boxed for leadership gifting.",
    summary: "A boxed pairing of journal and pen, presented for church leadership and administrator gifting.",
    paragraph2: "Our most requested set for appreciation events recognizing ministry and administrative service.",
    whatsIncluded: ["Study journal", "Premium pen", "Presentation gift box"],
    documentationAvailable: FULL_PASSPORT_DOCS,
    indicativePriceGuide: "₱2,450 indicative, per set.",
    placeholderIcon: "gift-box",
    placeholderTone: "navy",
    featured: true,
  }),
  incProduct({
    slug: "member-appreciation-gift-box",
    name: "Member Appreciation Gift Box",
    tagline: "A curated boxed set for member appreciation occasions.",
    summary: "A curated boxed assortment from this collection, sized for member appreciation events.",
    paragraph2: "Contents are confirmed at quotation to fit your budget and the occasion.",
    whatsIncluded: ["Curated assortment from the Bible Study Collection", "Presentation gift box"],
    documentationAvailable: FULL_PASSPORT_DOCS,
    indicativePriceGuide: "₱2,800 indicative, per box — contents and final pricing confirmed at quotation.",
    placeholderIcon: "gift-box",
    placeholderTone: "navy",
  }),
  incProduct({
    slug: "appreciation-card-pen-set",
    name: "Appreciation Card and Pen Set",
    tagline: "A card and pen pairing for simple, respectful appreciation gifting.",
    summary: "A simple card-and-pen pairing for everyday appreciation gifting.",
    paragraph2: "An accessible option for bulk appreciation gifting at church or district events.",
    whatsIncluded: ["Appreciation card", "Pen"],
    indicativePriceGuide: "₱1,050 indicative, per set.",
    placeholderIcon: "pen-set",
    placeholderTone: "stone",
  }),
];

/* ------------------------------------------------------------------ */
/*  4. Catholic Devotional Keepsakes                                   */
/* ------------------------------------------------------------------ */

const catholicKeepsakes: Product[] = [
  {
    slug: "olive-wood-rosary",
    collectionSlug: "catholic-devotional-keepsakes",
    name: "Olive Wood Rosary",
    tagline: "A handcrafted rosary from genuine Holy Land olive wood.",
    summary: "A handcrafted olive wood rosary, made in the Holy Land and finished for daily devotional use.",
    description: [
      "Each rosary is crafted from genuine olive wood and finished for comfortable daily use in prayer.",
      "A frequently requested keepsake for parish gift shops, First Communion, and Confirmation gifting.",
    ],
    communityFit: ["catholic", "gift-shop-distributor"],
    originStatement: "Made in the Holy Land from genuine olive wood.",
    suggestedUse: "Devotional keepsake for personal use, parish gifting, and gift shop resale.",
    whatsIncluded: ["Olive wood rosary", "Small organza gift pouch"],
    documentationAvailable: BATCH_RECORD_DOCS,
    indicativePriceGuide: "₱650 indicative, per unit.",
    detailNotes: [
      { label: "Devotional keepsake", body: "Presented as a devotional keepsake rather than a blessed object — parishes and individual buyers may have it blessed locally according to their own practice." },
      { label: "Respectful packaging", body: "Packed in a simple organza pouch suited to gifting without additional unboxing." },
    ],
    placeholderIcon: "rosary",
    placeholderTone: "stone",
    featured: false,
  },
  {
    slug: "olive-wood-cross-keepsake",
    collectionSlug: "catholic-devotional-keepsakes",
    name: "Olive Wood Cross (Keepsake Size)",
    tagline: "A small olive wood cross for home, travel, or gifting.",
    summary: "A small olive wood cross sized for a home shelf, travel bag, or gift shop counter.",
    description: [
      "Carved from genuine olive wood, this keepsake-size cross is sized for the home, for travel, or for gifting.",
      "A reliable, repeat-purchase item for Cathedral and Basilica gift shops.",
    ],
    communityFit: ["catholic", "gift-shop-distributor"],
    originStatement: "Made in the Holy Land from genuine olive wood.",
    suggestedUse: "Devotional keepsake for personal use, parish gifting, and gift shop resale.",
    whatsIncluded: ["Olive wood cross"],
    documentationAvailable: BATCH_RECORD_DOCS,
    variants: [
      { label: "Small", indicativePricePHP: "₱350" },
      { label: "Medium", indicativePricePHP: "₱650" },
      { label: "Large", indicativePricePHP: "₱1,200" },
    ],
    indicativePriceGuide: "₱350–₱1,200 indicative, depending on size.",
    detailNotes: [
      { label: "Devotional keepsake", body: "Presented as a devotional keepsake. Blessing, where desired, is arranged locally by the parish or buyer." },
    ],
    placeholderIcon: "cross",
    placeholderTone: "wood",
  },
  {
    slug: "devotional-anointing-oil-small",
    collectionSlug: "catholic-devotional-keepsakes",
    name: "Devotional Anointing Oil (Small Bottle)",
    tagline: "A small, gift-ready anointing oil bottle for devotional use.",
    summary: "A small devotional anointing oil bottle, sized and packaged for personal gifting.",
    description: [
      "Prepared in the Holy Land and bottled in a small, gift-ready size for devotional use.",
      "A popular small addition to Holy Land gift sets and parish gift shop counters.",
    ],
    communityFit: ["catholic", "gift-shop-distributor"],
    originStatement: "Prepared in Israel from botanical sources, bottled for devotional use.",
    suggestedUse: "For personal devotion and gifting. For external devotional use only.",
    whatsIncluded: ["Small labeled bottle", "Devotional-use-only labeling"],
    documentationAvailable: BATCH_RECORD_DOCS,
    cautionNote: OIL_CAUTION,
    indicativePriceGuide: "₱650 indicative, per bottle.",
    detailNotes: [OIL_DOC_NOTE, OIL_PACKAGING_NOTE],
    placeholderIcon: "oil-bottle",
    placeholderTone: "ivory",
  },
  {
    slug: "prayer-scripture-card-set",
    collectionSlug: "catholic-devotional-keepsakes",
    name: "Prayer & Scripture Card Set",
    tagline: "A set of devotional prayer cards for personal and parish use.",
    summary: "A set of prayer and Scripture cards prepared for personal devotion and parish distribution.",
    description: [
      "A clean, respectful set of prayer and Scripture cards, suited to personal devotion or parish-wide distribution.",
      "Frequently ordered in bulk for parish events, novenas, and memorial services.",
    ],
    communityFit: ["catholic", "gift-shop-distributor"],
    originStatement: "Prepared and documented in the Holy Land.",
    suggestedUse: "For personal devotion, parish distribution, and gift shop resale.",
    whatsIncluded: ["Set of 30 prayer and Scripture cards"],
    documentationAvailable: ORIGIN_CARD_DOCS,
    indicativePriceGuide: "₱320 indicative, per set of 30.",
    detailNotes: [
      { label: "Bulk parish orders", body: "Available in larger bulk quantities for parish-wide distribution; request a quote for case pricing." },
    ],
    placeholderIcon: "card-set",
    placeholderTone: "ivory",
  },
  {
    slug: "holy-land-gift-set-small",
    collectionSlug: "catholic-devotional-keepsakes",
    name: "Holy Land Gift Set (Small)",
    tagline: "A small boxed assortment of Holy Land devotional keepsakes.",
    summary: "A small boxed assortment of devotional keepsakes, presented together for gifting.",
    description: [
      "A curated small gift box pairing a few of our devotional keepsakes — typically a cross, a small oil bottle, and a prayer card — presented together for gifting.",
      "A dependable option for sacrament gifts (Baptism, First Communion, Confirmation) and parish appreciation gifting.",
    ],
    communityFit: ["catholic", "gift-shop-distributor"],
    originStatement: "Made and prepared in the Holy Land; documentation included with every set.",
    suggestedUse: "Devotional gifting for sacraments, parish appreciation, and personal keepsakes.",
    whatsIncluded: ["Curated small assortment (confirmed at quotation)", "Presentation gift box", "Certificate of Holy Land Documentation"],
    documentationAvailable: FULL_PASSPORT_DOCS,
    indicativePriceGuide: "₱1,250 indicative, per set.",
    detailNotes: [
      { label: "Sacrament gifting", body: "A frequently requested set for Baptism, First Communion, and Confirmation gifting." },
    ],
    placeholderIcon: "gift-box",
    placeholderTone: "ivory",
    featured: true,
  },
  {
    slug: "gift-shop-counter-display-pack",
    collectionSlug: "catholic-devotional-keepsakes",
    name: "Gift Shop Counter Display Starter Pack",
    tagline: "An assorted starter pack with signage, sized for shop counters.",
    summary: "An assorted starter pack of devotional keepsakes with counter signage, sized for gift shop resale.",
    description: [
      "Built for parish and Cathedral gift shops opening or refreshing a Holy Land devotional counter — a small assortment across crosses, rosaries, oils, and prayer cards, with simple counter signage explaining Holy Land origin and documentation.",
      "Quantities, assortment mix, and consignment or wholesale terms are confirmed directly with our gift shop and distributor team.",
    ],
    communityFit: ["catholic", "gift-shop-distributor"],
    originStatement: "Made and prepared in the Holy Land; full batch documentation included.",
    suggestedUse: "For gift shop and church-adjacent retail counters introducing a Holy Land devotional section.",
    whatsIncluded: ["Assorted starter inventory across this collection", "Counter signage and origin card", "Batch-level Provenance documentation"],
    documentationAvailable: FULL_PASSPORT_DOCS,
    indicativePriceGuide: "₱10,800–₱15,800 indicative, per starter pack — final assortment and pricing confirmed at quotation.",
    detailNotes: [
      { label: "For gift shops & distributors", body: "See our dedicated Gift Shops & Distributors page for minimum order quantities, consignment options, and reseller terms." },
    ],
    placeholderIcon: "display-rack",
    placeholderTone: "navy",
  },
];

export const products: Product[] = [
  ...shofars,
  ...anointingOils,
  ...bibleStudyCollection,
  ...catholicKeepsakes,
];

export function getProductsByCollection(collectionSlug: string): Product[] {
  return products.filter((p) => p.collectionSlug === collectionSlug);
}

export function getProductBySlug(collectionSlug: string, slug: string): Product | undefined {
  return products.find((p) => p.collectionSlug === collectionSlug && p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}
