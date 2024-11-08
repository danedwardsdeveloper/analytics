import clsx from 'clsx'
import Link from 'next/link'

const baseMenuItemStyles =
  'px-2.5 py-2 font-medium shrink-0 rounded block transition-colors duration-200'
const linkStyles = 'text-base text-slate-950'
const buttonStyles = 'text-sm text-slate-800 text-left font-normal'

interface MenuItemProps {
  displayName: string
  isActive?: boolean
  href?: string
  onClick?: () => void
  className?: string
}

export default function MenuItem({
  displayName,
  isActive,
  href,
  onClick,
  className,
}: MenuItemProps) {
  const styles = clsx(
    baseMenuItemStyles,
    isActive ? 'bg-blue-500/15' : 'hover:bg-blue-500/5 hover:text-blue-800',
    className
  )

  if (href) {
    return (
      <Link href={href} className={clsx(styles, linkStyles)}>
        {displayName}
      </Link>
    )
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(styles, buttonStyles)}
    >
      {displayName}
    </button>
  )
}
