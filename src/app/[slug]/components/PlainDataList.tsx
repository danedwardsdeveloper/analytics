interface Item {
  name: string
  value: number
}

export default function PlainDataList({ items }: { items: Item[] }) {
  return (
    <>
      {items.map((item, index) => (
        <div
          key={`${item.name}${item.value}${index}`}
          className="flex justify-between items-center h-8"
        >
          <span className="text-gray-600">{item.name}</span>
          <span className="text-gray-900">{item.value.toLocaleString()}</span>
        </div>
      ))}
    </>
  )
}
