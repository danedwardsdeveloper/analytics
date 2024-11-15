import { ComponentType } from 'react'

import PercentageBar from './PercentageBar'

function TempIcon() {
  return <div className="w-14 h-full bg-gray-300 rounded-sm overflow-hidden" />
}

interface Props {
  items: Array<{
    name: string
    value: number
    Icon?: ComponentType
  }>
}

export default function PercentageDataList({ items }: Props) {
  return (
    <>
      {items.map((item, index) => {
        const ItemIcon = item.Icon || TempIcon

        return (
          <div
            key={`${item.name}${item.value}${index}`}
            className="flex justify-start items-center gap-2 group h-8"
          >
            <ItemIcon />
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
