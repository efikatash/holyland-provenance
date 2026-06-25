import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustStrip } from "@/components/home/TrustStrip";
import { TrustNarrativeSection } from "@/components/home/TrustNarrativeSection";
import { AudienceSelector } from "@/components/home/AudienceSelector";
import { FeaturedCollections } from "@/components/home/FeaturedCollections";
import { ProvenancePassportPreview } from "@/components/provenance/ProvenancePassportPreview";
import { PastorsSection } from "@/components/home/PastorsSection";
import { ResellersSection } from "@/components/home/ResellersSection";
import { FinalCta } from "@/components/home/FinalCta";

export const metadata: Metadata = {
  title: "Holy Land Products, Verified for the Philippines",
  description:
    "Premium Christian gifts, worship items, and Bible study products with documented Holy Land origin, batch records, and provenance you can verify — for churches, pastors, gift shops, and distributors in the Philippines.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <TrustNarrativeSection />
      <AudienceSelector />
      <FeaturedCollections />
      <ProvenancePassportPreview />
      <PastorsSection />
      <ResellersSection />
      <FinalCta />
    </>
  );
}
