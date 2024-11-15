import { ReactNode } from 'react'

import PercentageBar from './PercentageBar'

interface Item {
  name: string
  value: number
}

export function DataListContainer({
  title,
  children,
}: {
  title: string
  children?: ReactNode
}) {
  return (
    <div className="flex flex-col gap-y-4 w-full">
      <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      {children}
    </div>
  )
}

interface PercentageDataItemsProps {
  items: Item[]
  unit?: string
  percentage?: boolean
}

export function PercentageDataItems({ items }: PercentageDataItemsProps) {
  return (
    <>
      {items.map((item, index) => (
        <div
          key={`${item.name}${item.value}${index}`}
          className="flex justify-start items-center gap-2 group h-8"
        >
          <div className="w-14 h-full bg-gray-300 rounded-sm overflow-hidden" />
          <PercentageBar
            key={`${index}${item.name}${item.value}`}
            percentage={item.value}
            hoverText={item.name}
          />
        </div>
      ))}
    </>
  )
}

interface DataListItemsProps {
  items: Item[]
  unit?: string
}

export function DataListItems({ items, unit }: DataListItemsProps) {
  return (
    <>
      {items.map((item, index) => (
        <div
          key={`${item.name}${item.value}${index}`}
          className="flex justify-between items-center h-8"
        >
          <span className="text-gray-600">{item.name}</span>
          <span className="text-gray-900">
            {item.value.toLocaleString()}
            {unit && <span className="ml-0.5 text-gray-600">{unit}</span>}
          </span>
        </div>
      ))}
    </>
  )
}
