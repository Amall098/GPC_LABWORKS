/**
 * Section.tsx
 * Generic section component with optional title and description.
 */

import type { ReactNode } from 'react'

/**
 * Props for the Section component.
 */
interface SectionProps {
  /** Optional section heading. */
  readonly title?: string
  /** Optional short description displayed under the heading. */
  readonly description?: string
  /** Content of the section. */
  readonly children: ReactNode
  /** Additional CSS classes for layout customization. */
  readonly className?: string
}

/**
 * Section component used to provide consistent spacing and typography
 * for distinct content blocks on the page.
 */
export default function Section({
  title,
  description,
  children,
  className = '',
}: SectionProps) {
  return (
    <section className={`py-8 sm:py-10 ${className}`}>
      {(title || description) && (
        <header className="mb-6 space-y-2">
          {title && (
            <h2 className="text-xl font-semibold tracking-tight text-zinc-50 sm:text-2xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="max-w-2xl text-sm text-zinc-300 sm:text-base">
              {description}
            </p>
          )}
        </header>
      )}
      {children}
    </section>
  )
}
