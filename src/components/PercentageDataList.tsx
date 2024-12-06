import { ComponentType } from 'react'

import PercentageBar from './PercentageBar'

interface Props {
  items: Array<{
    name: string
    value: number
    Icon: ComponentType
  }>
}

export default function PercentageDataList({ items }: Props) {
  return (
    <>
      {items
        .sort((a, b) => b.value - a.value)
        .map((item, index) => {
          return (
            <div
              key={`${item.name}${item.value}${index}`}
              className="flex justify-start items-center gap-2 group h-8"
            >
              <item.Icon />
              <PercentageBar
                key={`${index}${item.name}${item.value}`}
                percentage={item.value}
                hoverText={item.name}
              />
            </div>
          )
        })}
    </>
  )
}
