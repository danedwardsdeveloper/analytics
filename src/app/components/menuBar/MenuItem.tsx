import clsx from 'clsx'
import Link from 'next/link'

const baseStyles =
  'px-2.5 py-2 font-medium shrink-0 rounded block transition-colors duration-200 text-left'

type Size = 'sm' | 'base'

interface MenuItemProps {
  displayName: string
  isActive?: boolean
  href?: string
  onClick?: () => void
  size?: Size
  className?: string
}

const sizeStyles: Record<Size, string> = {
  sm: 'text-sm font-normal',
  base: 'text-base',
}

const colorStyles = {
  active: 'bg-blue-500/15',
  inactive: 'hover:bg-blue-500/5 hover:text-blue-800',
  text: {
    sm: 'text-slate-800',
    base: 'text-slate-950',
  },
}

export default function MenuItem({
  displayName,
  isActive,
  href,
  onClick,
  size = 'base',
  className,
}: MenuItemProps) {
  const styles = clsx(
    baseStyles,
    sizeStyles[size],
    colorStyles.text[size],
    isActive ? colorStyles.active : colorStyles.inactive,
    className
  )

  if (href) {
    return (
      <Link href={href} className={styles}>
        {displayName}
      </Link>
    )
  }

  return (
    <button type="button" onClick={onClick} className={styles}>
      {displayName}
    </button>
  )
}
