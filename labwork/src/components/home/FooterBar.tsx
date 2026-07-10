/**
 * FooterBar.tsx
 * Compact footer repeating address information at the bottom of the page.
 */

import { MapPin } from 'lucide-react'

/**
 * FooterBar component displaying a slim footer strip with key details.
 */
export default function FooterBar() {
  return (
    <footer className="mt-6 border-t border-zinc-800 pt-4 text-[11px] text-zinc-500 sm:mt-8 sm:text-xs">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5 text-zinc-400" />
          <span>
            GPC Labworks, 273 Bank St, Ottawa, ON K2P 1X5, Canada ·
            613&nbsp;567&nbsp;0770 · fotodesk@gpclabworks.com
          </span>
        </p>
        <p className="text-[10px] text-zinc-600 sm:text-[11px]">
          © {new Date().getFullYear()} GPC Labworks. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
