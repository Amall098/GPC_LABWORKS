/**
 * AboutSection.tsx
 * Section explaining "who we are" using adapted copy from the flyer.
 */

import Section from '../layout/Section'

/**
 * AboutSection component presenting background information about GPC Labworks.
 */
export default function AboutSection() {
  return (
    <Section
      title="Who we are"
      description="A dedicated photofinishing lab serving photographers, artists, and archives across Ottawa."
    >
      <div className="grid gap-6 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <div className="space-y-3 text-sm leading-relaxed text-zinc-200">
          <p>
            GPC Labworks offers full photofinishing services where we develop,
            print, and scan colour film, black &amp; white film, as well as
            single‑use disposable cameras.
          </p>
          <p>
            We also print from digital files onto inkjet and giclée papers, from
            wallet‑size prints up to 44&nbsp;inches wide. Our team carefully
            reviews every job so your negatives, files, and finished prints look
            their best.
          </p>
          <p>
            Prints from digital files can be ordered in‑store or online through
            our fotodesk print service for convenient in‑store pick‑up.
          </p>
        </div>
        <aside className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 text-xs text-zinc-200 sm:text-sm">
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Good to know
          </h3>
          <ul className="space-y-1.5">
            <li>• 2026 price list available as a downloadable PDF.</li>
            <li>• Standard and rush turnaround options on many services.</li>
            <li>• Archival‑friendly handling of your film and artwork.</li>
          </ul>
        </aside>
      </div>
    </Section>
  )
}
