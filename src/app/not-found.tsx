import { Container } from "@/components/shared/Container";
import { PremiumLinkButton } from "@/components/shared/PremiumLinkButton";
import { JerusalemSkyline } from "@/components/shared/JerusalemSkyline";
import { GoldDivider } from "@/components/shared/GoldDivider";

export default function NotFound() {
  return (
    <div className="relative overflow-hidden bg-navy-gradient bg-grain py-28 text-center">
      <JerusalemSkyline className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 w-full text-ivory-100 opacity-[0.06]" />
      <Container className="relative">
        <p className="eyebrow text-gold-400">Page Not Found</p>
        <h1 className="mt-4 text-display-md text-ivory-100">This page hasn&rsquo;t been documented.</h1>
        <div className="my-6 flex justify-center">
          <GoldDivider />
        </div>
        <p className="mx-auto max-w-md text-ivory-300/75">
          The page you&rsquo;re looking for may have moved. Try one of our collections, or get in touch directly.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <PremiumLinkButton href="/" variant="gold">
            Return Home
          </PremiumLinkButton>
          <PremiumLinkButton href="/collections" variant="outline-light">
            Browse Collections
          </PremiumLinkButton>
        </div>
      </Container>
    </div>
  );
}
