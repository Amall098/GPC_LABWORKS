/**
 * PageShell.tsx
 * High-level layout wrapper providing background, typography, and page padding.
 */

import type { ReactNode } from 'react'

/**
 * Props for the PageShell component.
 */
interface PageShellProps {
  /** React children to render inside the shell. */
  readonly children: ReactNode
}

/**
 * PageShell component that wraps all page content with a consistent
 * background, max-width container, and vertical spacing.
 */
export default function PageShell({ children }: PageShellProps) {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-10 pt-6 sm:px-6 lg:px-8 lg:pt-10">
        {children}
      </div>
    </div>
  )
}
