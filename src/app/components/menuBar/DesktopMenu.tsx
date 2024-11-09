'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

import { MenuItemInterface } from '.'
import { Site } from '@/library/sites'
import Divider from '../Divider'
import TimeFilters, { TimeRange } from './TimeFilters'
import { NavigationLinks, SiteLinks } from './MenuLinks'

interface DesktopMenuProps {
  menuItems: MenuItemInterface[]
  sites: Site[]
  initialTimeRange?: TimeRange
  // eslint-disable-next-line no-unused-vars
  onTimeRangeChange?: (range: TimeRange) => void
}

export default function DesktopMenu({
  menuItems,
  sites,
  initialTimeRange = '30days',
  onTimeRangeChange,
}: DesktopMenuProps) {
  const path = usePathname()
  const [timeRange, setTimeRange] = useState<TimeRange>(initialTimeRange)

  const handleTimeRangeChange = (range: TimeRange) => {
    setTimeRange(range)
    onTimeRangeChange?.(range)
  }

  return (
    <>
      <nav className="space-y-4">
        <NavigationLinks menuItems={menuItems} currentPath={path} />
        <Divider />
        <SiteLinks sites={sites} currentPath={path} />
      </nav>
      <Divider />
      <TimeFilters
        selectedRange={timeRange}
        onRangeChange={handleTimeRangeChange}
      />
    </>
  )
}
