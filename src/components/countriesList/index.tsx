import { CountriesData } from '@/library/analyticsData'

import DataContainer from '../DataContainer'
import CountryItem from './CountryItem'

export default function CountriesList({
  countriesData,
}: {
  countriesData: CountriesData
}) {
  return (
    <DataContainer title={`Countries`}>
      {countriesData.map((country) => (
        <CountryItem
          key={country.countryKey}
          countryKey={country.countryKey}
          percentage={country.percentage}
        />
      ))}
    </DataContainer>
  )
}
