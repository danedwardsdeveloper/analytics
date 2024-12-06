export default function DataContainer({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-y-4 w-full">
      <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      {children}
    </div>
  )
}
