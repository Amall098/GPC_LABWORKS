/**
 * VisitContactSection.tsx
 * Section highlighting address, phone, email, and visit options.
 */

import { Mail, MapPin, Phone } from 'lucide-react'
import Section from '../layout/Section'

/**
 * VisitContactSection component showing location and contact information.
 */
export default function VisitContactSection() {
  return (
    <Section
      title="Visit &amp; contact"
      description="Drop off film, pick up prints, or talk to us about your next project."
    >
      <div className="grid gap-6 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <div className="space-y-4 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4">
          <div className="space-y-1 text-sm text-zinc-200">
            <p className="font-medium text-zinc-100">
              GPC Labworks – Photofinishing Lab
            </p>
            <p>273 Bank St</p>
            <p>Ottawa, Ontario, Canada</p>
            <p>K2P 1X5</p>
          </div>

          <div className="grid gap-3 text-sm text-zinc-200 sm:grid-cols-3">
            <a
              href="https://maps.google.com/?q=GPC+Labworks+273+Bank+St+Ottawa+ON+K2P+1X5"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950/60 px-3 py-2 text-xs font-medium transition hover:border-red-400 hover:text-red-200 sm:text-sm"
            >
              <MapPin className="h-4 w-4 text-red-300" />
              <span>Get directions</span>
            </a>
            <a
              href="tel:+16135670770"
              className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950/60 px-3 py-2 text-xs font-medium transition hover:border-red-400 hover:text-red-200 sm:text-sm"
            >
              <Phone className="h-4 w-4 text-red-300" />
              <span>Call 613&nbsp;567&nbsp;0770</span>
            </a>
            <a
              href="mailto:fotodesk@gpclabworks.com"
              className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950/60 px-3 py-2 text-xs font-medium transition hover:border-red-400 hover:text-red-200 sm:text-sm"
            >
              <Mail className="h-4 w-4 text-red-300" />
              <span>Email fotodesk</span>
            </a>
          </div>
        </div>

        <div className="space-y-3 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 text-xs text-zinc-300 sm:text-sm">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Store hours at a glance
          </h3>
          <dl className="space-y-1.5">
            <div className="flex justify-between gap-4">
              <dt>Tuesday – Friday</dt>
              <dd className="font-medium text-zinc-100">9:00 am – 5:30 pm</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Saturday</dt>
              <dd className="font-medium text-zinc-100">
                12:00 noon – 4:30 pm
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Sunday &amp; Monday</dt>
              <dd className="font-medium text-zinc-400">Closed</dd>
            </div>
          </dl>
          <p className="pt-1 text-[11px] text-zinc-400 sm:text-xs">
            The lab is closed on all federal and Ontario statutory holidays.
          </p>
        </div>
      </div>
    </Section>
  )
}
