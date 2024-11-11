'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { baseStyles, colourStyles, sizeStyles } from '../styles'

export function DesktopHomeButton() {
  const currentPath = usePathname()
  const isActive = currentPath === `/`
  return (
    <Link
      href={`/`}
      className={clsx(
        baseStyles,
        sizeStyles['base'],
        colourStyles.text['base'],
        isActive ? colourStyles.active : colourStyles.inactive,
      )}
    >
      {`Home`}
    </Link>
  )
}
