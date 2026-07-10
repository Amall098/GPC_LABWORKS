/**
 * OnlineOrdersSection.tsx
 * Section promoting fotodesk online orders and the downloadable price list.
 */

import { ExternalLink, FileDown } from 'lucide-react'
import Section from '../layout/Section'

/**
 * Card definition for online call-to-actions.
 */
interface OnlineCard {
  /** Card title. */
  readonly title: string
  /** Supporting description. */
  readonly description: string
  /** Optional href for the primary link. */
  readonly href?: string
  /** Label used for the link button. */
  readonly linkLabel: string
  /** Whether this card represents a PDF download. */
  readonly isPdf?: boolean
}

/**
 * Online actions available for GPC Labworks customers.
 * Replace placeholder href values with live URLs when available.
 */
const ONLINE_CARDS: OnlineCard[] = [
  {
    title: 'fotodesk – English',
    description:
      'Order prints from digital files online and pick them up in the lab.',
    href: '#',
    linkLabel: 'Open fotodesk (EN)',
  },
  {
    title: 'fotodesk – Français',
    description:
      'Commander vos tirages en ligne et récupérez-les chez GPC Labworks.',
    href: '#',
    linkLabel: 'Ouvrir fotodesk (FR)',
  },
  {
    title: '2026 price list',
    description:
      'Detailed pricing for film processing, scanning, digital printing, and fine art papers.',
    href: '/gpc_labworks_2026_price_list.pdf',
    linkLabel: 'Download PDF',
    isPdf: true,
  },
]

/**
 * OnlineOrdersSection component, showing CTAs for online orders and pricing.
 */
export default function OnlineOrdersSection() {
  return (
    <Section
      title="Online print orders &amp; price list"
      description="Order prints from home or review detailed pricing before your visit."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {ONLINE_CARDS.map((card) => (
          <article
            key={card.title}
            className="flex h-full flex-col rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4"
          >
            <h3 className="text-sm font-semibold text-zinc-50 sm:text-base">
              {card.title}
            </h3>
            <p className="mt-2 flex-1 text-xs text-zinc-300 sm:text-sm">
              {card.description}
            </p>
            <div className="mt-3">
              {card.href ? (
                <a
                  href={card.href}
                  target={card.isPdf ? '_blank' : '_self'}
                  rel={card.isPdf ? 'noreferrer' : undefined}
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-950/60 px-3 py-2 text-xs font-medium text-zinc-100 transition hover:border-red-400 hover:text-red-200 sm:text-sm"
                >
                  {card.isPdf ? (
                    <FileDown className="h-4 w-4 text-red-300" />
                  ) : (
                    <ExternalLink className="h-4 w-4 text-red-300" />
                  )}
                  <span>{card.linkLabel}</span>
                </a>
              ) : (
                <p className="text-[11px] text-zinc-500 sm:text-xs">
                  Online link coming soon.
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
      <p className="mt-4 text-[11px] text-zinc-500 sm:text-xs">
        Tip: replace the placeholder links with your live fotodesk URLs and host
        the PDF at the specified path for direct downloads.
      </p>
    </Section>
  )
}
