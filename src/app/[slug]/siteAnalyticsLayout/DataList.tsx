import { ReactNode } from 'react'

import PercentageBar from './PercentageBar'

interface Item {
  name: string
  value: number
}

export function DataListContainer({
  title,
  children,
  items,
  unit,
  percentage,
}: {
  title: string
  children?: ReactNode
  items?: Item[]
  unit?: string
  percentage?: boolean
}) {
  return (
    <div className="flex flex-col gap-y-4 w-full">
      <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      <>
        {children}
        {items && (
          <DataListItems items={items} unit={unit} percentage={percentage} />
        )}
      </>
    </div>
  )
}

interface DataListItemsProps {
  items: Item[]
  unit?: string
  percentage?: boolean
}

export function DataListItems({ items, unit, percentage }: DataListItemsProps) {
  return (
    <>
      {items.map((item, index) =>
        percentage ? (
          <>
            <div
              key={`${item.name}${item.value}${index}`}
              className="flex justify-between items-center h-8"
            >
              <PercentageBar
                key={`${index}${item.name}${item.value}`}
                label={item.name}
                percentage={item.value}
              />
            </div>
          </>
        ) : (
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
        ),
      )}
    </>
  )
}
