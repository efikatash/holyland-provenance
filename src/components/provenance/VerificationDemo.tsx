"use client";

import { useState, type FormEvent } from "react";
import { Search, CheckCircle2, AlertCircle } from "lucide-react";
import { findProvenanceSample, provenanceSamples } from "@/data/provenance-samples";
import type { ProvenanceSampleRecord } from "@/lib/types";
import { CertificateMockup } from "./CertificateMockup";
import { JourneyLogCard } from "./JourneyLogCard";
import { QRProofCard } from "./QRProofCard";
import { Input } from "@/components/ui/input";
import { PremiumButton } from "@/components/shared/PremiumButton";
import { Badge } from "@/components/shared/Badge";
import { MediaFrame } from "@/components/shared/MediaFrame";

type SearchState = "idle" | "found" | "not-found";

/** Interactive serial-number lookup against the sample provenance records in /src/data/provenance-samples.ts. */
export function VerificationDemo() {
  const [query, setQuery] = useState("");
  const [state, setState] = useState<SearchState>("idle");
  const [result, setResult] = useState<ProvenanceSampleRecord | null>(null);

  function runSearch(serial: string) {
    const found = findProvenanceSample(serial);
    setResult(found ?? null);
    setState(found ? "found" : "not-found");
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    runSearch(query);
  }

  function trySample(serial: string) {
    setQuery(serial);
    runSearch(serial);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <div className="flex-1">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter serial number, e.g. HL-SHF-000127"
            aria-label="Serial number"
          />
        </div>
        <PremiumButton type="submit" variant="gold" icon={Search} className="sm:w-auto">
          Verify
        </PremiumButton>
      </form>

      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-ink-400/70">
        <span>Try a sample record:</span>
        {provenanceSamples.map((s) => (
          <button
            key={s.serial}
            type="button"
            onClick={() => trySample(s.serial)}
            className="rounded-full border border-stone-300 px-3 py-1 font-medium text-navy-700 transition-colors hover:border-gold-500 hover:text-gold-700"
          >
            {s.serial}
          </button>
        ))}
      </div>

      {state === "not-found" && (
        <div className="mt-8 flex items-start gap-3 rounded-md border border-red-200 bg-red-50 p-5 text-sm text-red-700">
          <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" aria-hidden="true" />
          <div>
            <p className="font-semibold">No record found for &ldquo;{query}&rdquo;.</p>
            <p className="mt-1 text-red-600/80">
              This demo only recognizes the sample serial numbers above. On a connected system, every eligible
              product&rsquo;s real serial number would be checked against our live batch records.
            </p>
          </div>
        </div>
      )}

      {state === "found" && result && (
        <div className="mt-10">
          <div className="mb-6 flex flex-wrap items-center gap-3 rounded-md border border-olive-200 bg-olive-50/60 p-4">
            <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-olive-500" aria-hidden="true" />
            <div className="text-sm">
              <p className="font-semibold text-navy-700">{result.status}</p>
              <p className="text-ink-400">
                {result.productName} &middot; Batch {result.batch}
              </p>
            </div>
            <Badge tone="gold" className="ml-auto">
              Sample / Demo Record
            </Badge>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4">
              <dl className="grid grid-cols-2 gap-4 rounded-md border border-stone-200 bg-ivory-100 p-5 text-sm">
                <div>
                  <dt className="text-xs text-ink-400/60">Product</dt>
                  <dd className="font-medium text-navy-700">{result.productName}</dd>
                </div>
                <div>
                  <dt className="text-xs text-ink-400/60">Serial No.</dt>
                  <dd className="font-medium text-navy-700">{result.serial}</dd>
                </div>
                <div>
                  <dt className="text-xs text-ink-400/60">Batch No.</dt>
                  <dd className="font-medium text-navy-700">{result.batch}</dd>
                </div>
                <div>
                  <dt className="text-xs text-ink-400/60">Origin</dt>
                  <dd className="font-medium text-navy-700">{result.originStatement}</dd>
                </div>
                <div>
                  <dt className="text-xs text-ink-400/60">Documented At</dt>
                  <dd className="font-medium text-navy-700">{result.documentedAt.join(", ")}</dd>
                </div>
                <div>
                  <dt className="text-xs text-ink-400/60">Imported To</dt>
                  <dd className="font-medium text-navy-700">{result.importedTo}</dd>
                </div>
              </dl>

              <div className="grid grid-cols-2 gap-3">
                {result.documents.map((doc) => (
                  <div key={doc.label} className="rounded-md border border-stone-200 bg-ivory-100 p-3">
                    <p className="text-xs font-semibold text-navy-700">{doc.label}</p>
                    <p className="mt-1 text-[11px] leading-snug text-ink-400">{doc.description}</p>
                  </div>
                ))}
              </div>

              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-400/60">
                  Photo / Video Documentation
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {result.photoCaptions.map((caption) => (
                    <MediaFrame key={caption} icon="camera" tone="stone" caption={caption} aspect="square" />
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <CertificateMockup
                serial={result.serial}
                batch={result.batch}
                productName={result.productName}
                compact
                className="sm:col-span-2"
              />
              <QRProofCard serial={result.serial} />
              <JourneyLogCard batch={result.batch} compact />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
