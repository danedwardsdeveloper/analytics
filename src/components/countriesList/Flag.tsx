import { countries, CountryKey } from './data'

export default function Flag({ countryKey }: { countryKey: CountryKey }) {
  const country = countries[countryKey]
  const FlagComponent = country.component

  return (
    <div className="w-14 rounded overflow-hidden" title={country.name}>
      <FlagComponent />
    </div>
  )
}
