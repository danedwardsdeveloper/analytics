'use client'
import MenuItem from './MenuItem'
import { MenuItemInterface } from '.'
import { Site } from '@/library/sites'
import { TimeRange } from './TimeFilters'
import { SiteLinks } from './MenuLinks'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Divider from '../Divider'
import TimeFilters from './TimeFilters'
import clsx from 'clsx'

interface MobileMenuProps {
  menuItems: MenuItemInterface[]
  sites: Site[]
  initialTimeRange?: TimeRange
  // eslint-disable-next-line no-unused-vars
  onTimeRangeChange?: (range: TimeRange) => void
}

export default function MobileMenu({
  sites,
  initialTimeRange = '30days',
  onTimeRangeChange,
}: MobileMenuProps) {
  const path = usePathname()
  const [timeRange, setTimeRange] = useState<TimeRange>(initialTimeRange)
  const [menuOpen, setMenuOpen] = useState(false)

  const handleTimeRangeChange = (range: TimeRange) => {
    setTimeRange(range)
    onTimeRangeChange?.(range)
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div
      className={clsx(
        'bg-blue-100/70 w-full flex flex-col justify-end items-center px-4 border-b',
        menuOpen ? 'border-transparent' : 'border-blue-200'
      )}
    >
      <div className="flex justify-between w-full my-3">
        <MenuItem displayName="Home" href="/" className="inline-block" />
        <MenuItem
          displayName="Menu"
          className="inline-block cursor-pointer"
          onClick={toggleMenu}
        />
      </div>
      <div
        className={`w-full overflow-hidden transition-[max-height] duration-700 ease-in-out ${
          menuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="pb-4 mx-3 mb-3 flex flex-col justify-start w-full">
          <Divider margin="mt-0 mb-3" />
          <nav className="space-y-3">
            <SiteLinks sites={sites} currentPath={path} />
          </nav>
          <Divider margin="my-4" />
          <TimeFilters
            selectedRange={timeRange}
            onRangeChange={handleTimeRangeChange}
          />
        </div>
      </div>
    </div>
  )
}
