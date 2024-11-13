interface GridListItem {
  name: string
  value: number
}

export interface GridListProps {
  title: string
  items: GridListItem[]
  unit?: string
}

export default function GridList({ title, items, unit }: GridListProps) {
  return (
    <div className="flex flex-col">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">{title}</h2>
      {items.map((item) => (
        <div key={item.name} className="flex justify-between items-center py-2">
          <span className="text-gray-600">{item.name}</span>
          <span className="text-gray-900">
            {item.value.toLocaleString()}
            <span className="ml-0.5 text-gray-600">{unit}</span>
          </span>
        </div>
      ))}
    </div>
  )
}
