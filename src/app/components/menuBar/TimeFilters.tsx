import MenuItem from './MenuItem'
export type TimeRange = '30days' | 'alltime'

interface TimeFiltersProps {
  selectedRange: TimeRange
  // eslint-disable-next-line no-unused-vars
  onRangeChange: (range: TimeRange) => void
}

export default function TimeFilters({
  selectedRange,
  onRangeChange,
}: TimeFiltersProps) {
  return (
    <div className="flex flex-col gap-4 w-fit">
      <MenuItem
        displayName="Last 30 days"
        size="sm"
        isActive={selectedRange === '30days'}
        onClick={() => onRangeChange('30days')}
      />
      <MenuItem
        displayName="All time"
        size="sm"
        isActive={selectedRange === 'alltime'}
        onClick={() => onRangeChange('alltime')}
      />
    </div>
  )
}
