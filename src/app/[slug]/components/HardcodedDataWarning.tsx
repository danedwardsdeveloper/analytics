export default function HardcodedDataWarning({
  display,
}: {
  display: boolean
}) {
  return (
    display && (
      <div className="bg-yellow-100 border border-yellow-300 py-2 px-3 rounded-lg flex items-center">
        <span className="text-3xl mr-2">⚠️</span>
        <span className="text-yellow-900">
          Using hardcoded data for development
        </span>
      </div>
    )
  )
}
