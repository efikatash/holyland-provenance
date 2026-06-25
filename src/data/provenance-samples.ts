import type { ProvenanceSampleRecord } from "@/lib/types";

/**
 * Sample / demo verification records for the Verify Product page.
 *
 * REPLACE-BEFORE-LAUNCH: these are illustrative demo records only.
 * Connect a real backend or database to /verify-product before
 * publishing real serial numbers to customers.
 */
export const provenanceSamples: ProvenanceSampleRecord[] = [
  {
    serial: "HL-SHF-000127",
    batch: "HL-2026-06-001",
    productName: "Yemenite Kudu Shofar",
    collectionSlug: "shofars",
    originStatement: "Prepared in the Holy Land from natural kudu horn.",
    documentedAt: ["Jerusalem", "Sea of Galilee", "Jordan River area"],
    importedTo: "Philippines",
    status: "Verified sample record",
    preparedDate: "May 26, 2026",
    importedDate: "June 8, 2026",
    documents: [
      { label: "Certificate of Holy Land Documentation", description: "Confirms serial, batch, and origin details for this unit." },
      { label: "Batch Journey Log", description: "Step-by-step record from preparation in the Holy Land to import into the Philippines." },
      { label: "Shipment Record", description: "Carrier and customs clearance reference for this batch." },
      { label: "Care Card", description: "Handling and storage guidance for natural horn." },
    ],
    photoCaptions: [
      "Documented at selected Biblical sites near Jerusalem",
      "Photographed near the Sea of Galilee",
      "Prepared and inspected before export from the Holy Land",
    ],
  },
  {
    serial: "HL-OIL-000452",
    batch: "HL-2026-05-014",
    productName: "King David Anointing Oil",
    collectionSlug: "anointing-oils",
    originStatement: "Prepared in the Holy Land from botanical sources.",
    documentedAt: ["Jerusalem", "Bethlehem"],
    importedTo: "Philippines",
    status: "Verified sample record",
    preparedDate: "May 14, 2026",
    importedDate: "May 30, 2026",
    documents: [
      { label: "Certificate of Holy Land Documentation", description: "Confirms batch and origin details for this bottling run." },
      { label: "Batch Journey Log", description: "Preparation and bottling record for this batch." },
      { label: "Shipment Record", description: "Carrier reference for this batch." },
      { label: "Care Card", description: "Storage and devotional-use guidance." },
    ],
    photoCaptions: ["Documented in Jerusalem", "Bottled and labeled before export from the Holy Land"],
  },
];

export const FEATURED_SAMPLE_SERIAL = "HL-SHF-000127";

export function findProvenanceSample(serial: string): ProvenanceSampleRecord | undefined {
  const normalized = serial.trim().toUpperCase();
  if (!normalized) return undefined;
  return provenanceSamples.find((s) => s.serial.toUpperCase() === normalized);
}
