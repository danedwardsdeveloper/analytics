import { CountriesData } from '@/library/analyticsData'

import { DataListContainer } from '../DataList'
import CountryItem from './CountryItem'

export default function CountriesList({
  countriesData,
}: {
  countriesData: CountriesData
}) {
  return (
    <DataListContainer title={`Countries`}>
      {countriesData.map((country) => (
        <CountryItem
          key={country.countryKey}
          countryKey={country.countryKey}
          percentage={country.percentage}
        />
      ))}
    </DataListContainer>
  )
}
