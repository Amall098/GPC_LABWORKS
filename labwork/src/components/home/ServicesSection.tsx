/**
 * ServicesSection.tsx
 * Section describing "what we do" using feature cards.
 */

import { Film, Printer, ScanLine } from 'lucide-react'
import Section from '../layout/Section'

/**
 * Single service card definition.
 */
interface ServiceItem {
  /** Card title. */
  readonly title: string
  /** Short description paragraph. */
  readonly description: string
  /** Bullet list of capabilities. */
  readonly points: string[]
  /** Icon component from lucide-react. */
  readonly icon: typeof Film
}

/**
 * Services offered by GPC Labworks, grouped into three main categories.
 */
const SERVICES: ServiceItem[] = [
  {
    title: 'Film developing',
    description:
      'Precise processing for colour (C‑41) and traditional black & white film.',
    points: [
      '35mm, 120, 220, and sheet film',
      'Push / pull processing available',
      'Single‑use disposable cameras',
    ],
    icon: Film,
  },
  {
    title: 'Photographic printing',
    description:
      'Beautiful, long‑lasting prints produced on professional Noritsu and Epson equipment.',
    points: [
      'From digital files, negatives, or slides',
      'Wallet size up to 44&quot; wide',
      'Glossy, lustre, and fine art rag papers',
    ],
    icon: Printer,
  },
  {
    title: 'Scanning & digitizing',
    description:
      'High‑quality scans that preserve detail from film, prints, and flat artwork.',
    points: [
      'From film: colour, B&amp;W, and slides',
      'From photographic prints and artwork',
      'Multiple resolutions for web or large output',
    ],
    icon: ScanLine,
  },
]

/**
 * ServicesSection highlighting the main groups of services in a responsive grid.
 */
export default function ServicesSection() {
  return (
    <Section
      title="What we do"
      description="From first roll of film to gallery‑ready prints, GPC Labworks offers complete photofinishing services."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {SERVICES.map((service) => {
          const Icon = service.icon
          return (
            <article
              key={service.title}
              className="flex h-full flex-col rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 shadow-lg shadow-black/30 sm:p-5"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-500/20 text-red-300">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="text-sm font-semibold text-zinc-50 sm:text-base">
                  {service.title}
                </h3>
              </div>
              <p className="mb-3 text-xs text-zinc-300 sm:text-sm">
                {service.description}
              </p>
              <ul className="mt-auto space-y-1.5 text-xs text-zinc-300 sm:text-sm">
                {service.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-400" />
                    <span dangerouslySetInnerHTML={{ __html: point }} />
                  </li>
                ))}
              </ul>
            </article>
          )
        })}
      </div>
    </Section>
  )
}
