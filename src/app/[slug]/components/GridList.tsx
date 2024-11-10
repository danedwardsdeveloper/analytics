interface Item {
  name: string
  value: number
}

interface Props {
  title: string
  items: Item[]
  unit?: string
}

export default function GridList({ title, items, unit }: Props) {
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
