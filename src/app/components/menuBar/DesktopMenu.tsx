'use client'
import { useState } from 'react'
import MenuItem from './MenuItem'
import { usePathname } from 'next/navigation'

import { MenuItemInterface } from '.'
import { Site } from '@/library/sites'
import Divider from '../Divider'

type TimeRange = '30days' | 'alltime'

function NavigationLinks({
  menuItems,
  currentPath,
}: {
  menuItems: MenuItemInterface[]
  currentPath: string
}) {
  return menuItems.map((menuItem) => (
    <MenuItem
      key={menuItem.slug}
      href={menuItem.slug}
      displayName={menuItem.displayName}
      isActive={currentPath === '/'}
    />
  ))
}

function SiteLinks({
  sites,
  currentPath,
}: {
  sites: Site[]
  currentPath: string
}) {
  return sites.map((site) => (
    <MenuItem
      key={site.slug}
      href={site.slug}
      displayName={site.displayName}
      isActive={currentPath === `/${site.slug}`}
    />
  ))
}

interface TimeFiltersProps {
  selectedRange: TimeRange
  onRangeChange: () => void
}

function TimeFilters({ selectedRange, onRangeChange }: TimeFiltersProps) {
  return (
    <div className="flex flex-col gap-4 w-fit">
      <MenuItem
        displayName="Last 30 days"
        isActive={selectedRange === '30days'}
        onClick={() => onRangeChange('30days')}
      />
      <MenuItem
        displayName="All time"
        isActive={selectedRange === 'alltime'}
        onClick={() => onRangeChange('alltime')}
      />
    </div>
  )
}

interface DesktopMenuProps {
  menuItems: MenuItemInterface[]
  sites: Site[]
  initialTimeRange?: TimeRange
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
    <div className="lg:w-72">
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
    </div>
  )
}
