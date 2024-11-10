'use client'
import clsx from 'clsx'
import { useApp } from '../AppProvider'
import { baseStyles, colourStyles, sizeStyles } from './styles'

export default function DateRangeButtons() {
  const { timeRange, setTimeRange, menuOpen, setMenuOpen } = useApp()
  const toggleMenu = () => setMenuOpen(!menuOpen)

  const allTime = timeRange === 'alltime'
  const days30 = timeRange === '30days'

  return (
    <div
      role="radiogroup"
      aria-label="Date range selection"
      className="flex flex-col gap-4 w-fit"
    >
      <button
        role="radio"
        aria-checked={days30}
        onClick={() => {
          setTimeRange('30days')
          toggleMenu()
        }}
        className={clsx(
          baseStyles,
          sizeStyles.sm,
          days30 ? colourStyles.active : colourStyles.inactive
        )}
        tabIndex={0}
      >{`Last 30 days`}</button>
      <button
        role="radio"
        aria-checked={allTime}
        onClick={() => {
          setTimeRange('alltime')
          toggleMenu()
        }}
        className={clsx(
          baseStyles,
          sizeStyles.sm,
          allTime ? colourStyles.active : colourStyles.inactive
        )}
        tabIndex={0}
      >{`All time`}</button>
    </div>
  )
}
