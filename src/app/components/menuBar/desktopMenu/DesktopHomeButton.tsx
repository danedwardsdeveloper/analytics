'use client'
import { usePathname } from 'next/navigation'
import { baseStyles, colourStyles, sizeStyles } from '../styles'
import clsx from 'clsx'
import Link from 'next/link'

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
        isActive ? colourStyles.active : colourStyles.inactive
      )}
    >
      {`Home`}
    </Link>
  )
}
