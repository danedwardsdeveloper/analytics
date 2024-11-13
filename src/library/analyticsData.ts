import { CountryKey } from '@/app/[slug]/siteAnalyticsLayout/countriesList/data'

export type PageViewsData = Array<{
  name: string
  value: number
}>

export type CountriesData = Array<{
  countryKey: CountryKey
  percentage: number
}>

type ReferralsData = Array<{
  name: string
  value: number
}>

export interface DevicesData {
  desktopPercentage: number
  tabletPercentage: number
  mobilePercentage: number
}

export interface BrowsersData {
  chromePercentage: number
  chromeMobilePercentage: number
  firefoxPercentage: number
  edgePercentage: number
  safariPercentage: number
}

export interface SiteAnalyticsData {
  totalViews: number
  sessions: number
  emailSubscriptions: number
  pageViewsData: PageViewsData
  countriesData: CountriesData
  referralsData: ReferralsData
  devicesData: DevicesData
  browsersData: BrowsersData
}
