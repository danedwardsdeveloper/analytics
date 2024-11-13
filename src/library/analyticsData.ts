export type CountryCodes = 'GB' | 'FR' | 'US'

export type PageViewsData = Array<{
  name: string
  value: number
}>

type CountriesData = Array<{
  countryCode: CountryCodes
  percentage: number
}>

type ReferralsData = Array<{
  source: string
  value: number
}>

interface DevicesData {
  desktopPercentage: number
  tabletPercentage: number
  mobilePercentage: number
}

interface BrowsersData {
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
