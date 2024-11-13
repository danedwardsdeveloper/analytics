import clsx from 'clsx'

export default function PercentageBar({
  percentage,
  label,
  hoverText,
}: {
  percentage: number
  label?: string
  hoverText?: string
}) {
  return (
    <div className="w-full">
      <div className="relative w-full h-8">
        <div
          className="absolute top-0 left-0 h-full bg-indigo-100 rounded-md transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
        <div className="absolute inset-0 flex items-center px-2 h-8">
          <div className="relative z-10 flex items-center">
            <span className="whitespace-nowrap">
              {`${label} ${percentage}`}%
            </span>
            <span
              className={clsx(
                'ml-2 pr-2 truncate text-slate-600',
                'md:opacity-0 group-hover:opacity-100',
                'transition-opacity duration-200',
              )}
            >
              {hoverText}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
