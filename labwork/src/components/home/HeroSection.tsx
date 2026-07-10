/**
 * HeroSection.tsx
 * Top-of-page hero for GPC Labworks with brand, store hours, and map call-to-actions.
 */

import { Camera, Clock, MapPin, Phone } from 'lucide-react'

/**
 * Helper describing one line of opening hours.
 */
interface StoreHoursLine {
  /** Human-readable label for the days. */
  readonly label: string
  /** Hours or "Closed". */
  readonly hours: string
}

/**
 * List of store hours displayed in the hero section.
 */
const STORE_HOURS: StoreHoursLine[] = [
  { label: 'Tuesday – Friday', hours: '9:00 am – 5:30 pm' },
  { label: 'Saturday', hours: '12:00 noon – 4:30 pm' },
  { label: 'Sunday & Monday', hours: 'Closed' },
]

/**
 * HeroSection presenting the main brand message, store hours, and quick actions.
 */
export default function HeroSection() {
  return (
    <section className="mb-6 rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 px-5 py-7 shadow-xl shadow-black/40 sm:mb-8 sm:px-8 sm:py-9">
      <div className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-start">
        {/* Brand + tagline */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="relative h-20 w-16 overflow-hidden rounded-md border border-zinc-700 bg-zinc-900 sm:h-24 sm:w-20">
              {/* Placeholder brand camera image */}
              <img
                src="https://pub-cdn.sider.ai/u/U08XHONVVR/web-coder/6a5143cc8c00d086c54ce483/resource/252d3be5-52dc-4ef9-a1ba-8a3e07ccae52.jpg"
                alt="Vintage film camera"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-red-500/60 bg-red-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-red-400">
                <Camera className="h-3.5 w-3.5" />
                <span>Film &amp; print lab</span>
              </div>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                GPC Labworks
              </h1>
              <p className="mt-2 max-w-xl text-sm text-zinc-300 sm:text-base">
                Professional film processing, fine art printing, and high quality
                scanning in the heart of downtown Ottawa.
              </p>
            </div>
          </div>

          {/* Quick actions */}
          <div className="flex flex-wrap gap-3">
            <a
              href="https://maps.google.com/?q=GPC+Labworks+273+Bank+St+Ottawa+ON+K2P+1X5"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-red-500 px-4 py-2 text-sm font-medium text-zinc-50 shadow-lg shadow-red-500/40 transition hover:bg-red-400"
            >
              <MapPin className="h-4 w-4" />
              <span>Visit the lab</span>
            </a>
            <a
              href="tel:+16135670770"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-100 transition hover:border-red-400 hover:text-red-200"
            >
              <Phone className="h-4 w-4" />
              <span>613&nbsp;567&nbsp;0770</span>
            </a>
          </div>
        </div>

        {/* Hours and map */}
        <div className="space-y-4">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-4">
            <div className="mb-3 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-red-400" />
                <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-200">
                  Store hours
                </h2>
              </div>
              <span className="rounded-full bg-red-500/15 px-3 py-1 text-xs font-medium text-red-300">
                Closed Sundays &amp; Mondays
              </span>
            </div>
            <dl className="space-y-1.5 text-xs text-zinc-200 sm:text-sm">
              {STORE_HOURS.map((line) => (
                <div
                  key={line.label}
                  className="flex items-baseline justify-between gap-4"
                >
                  <dt className="text-zinc-300">{line.label}</dt>
                  <dd
                    className={
                      line.hours === 'Closed'
                        ? 'font-medium text-zinc-400'
                        : 'font-semibold text-zinc-100'
                    }
                  >
                    {line.hours}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-[11px] text-zinc-400 sm:text-xs">
              We close for all federal and Ontario statutory holidays.
            </p>
          </div>

          <a
            href="https://maps.google.com/?q=GPC+Labworks+273+Bank+St+Ottawa+ON+K2P+1X5"
            target="_blank"
            rel="noreferrer"
            className="group flex items-stretch overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/70"
          >
            <div className="flex-1 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Where we are
              </p>
              <p className="mt-1 text-sm font-medium text-zinc-100">
                273 Bank St, Ottawa, Ontario
              </p>
              <p className="text-xs text-zinc-400">K2P 1X5, Canada</p>
              <p className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-red-300 group-hover:text-red-200">
                <MapPin className="h-3.5 w-3.5" />
                <span>Open in Google Maps</span>
              </p>
            </div>
            <div className="relative hidden w-32 border-l border-zinc-800 bg-zinc-950/60 sm:block">
              <img
                src="https://pub-cdn.sider.ai/u/U08XHONVVR/web-coder/6a5143cc8c00d086c54ce483/resource/6fe3ef7b-8400-4b54-bb45-f34d673ea162.jpg"
                alt="Map preview for GPC Labworks on Bank Street in Ottawa"
                className="h-full w-full object-cover transition duration-200 group-hover:scale-[1.03]"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
