interface CardData {
  title: string
  value: number
}

function DataCard({ title, value }: CardData) {
  return (
    <div className="w-full md:w-64 bg-indigo-50 border border-indigo-100 rounded-lg p-4 flex flex-row md:flex-col justify-between md:justify-start">
      <h3 className="font-medium text-lg mb-2">{title}</h3>
      <span className="text-xl">{value}</span>
    </div>
  )
}

interface DataCardsProps {
  cards: CardData[]
}

export default function DataCards({ cards }: DataCardsProps) {
  return (
    <div className="flex flex-col md:flex-row space-y-7 md:space-y-0 md:space-x-7 align-top">
      {cards.map((card) => (
        <DataCard key={card.title} {...card} />
      ))}
    </div>
  )
}
