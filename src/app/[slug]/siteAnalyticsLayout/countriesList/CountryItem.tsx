import PercentageBar from '../PercentageBar'
import { countries, CountryKey } from './data'
import Flag from './Flag'

export default function CountryItem({
  countryKey,
  percentage,
}: {
  countryKey: CountryKey
  percentage: number
}) {
  return (
    <div className="flex justify-start items-center gap-2 group h-8">
      <Flag countryKey={countryKey} />
      <PercentageBar
        percentage={percentage}
        hoverText={countries[countryKey].name}
      />
    </div>
  )
}
