import { SiteAnalyticsData } from './analyticsData'

export const tempData: SiteAnalyticsData = {
  totalViews: 202,
  sessions: 36,
  emailSubscriptions: 9,
  pageViewsData: [
    { name: '/', value: 64 },
    { name: '/about', value: 24 },
    { name: '/contact', value: 7 },
  ],
  countriesData: [
    {
      countryKey: 'france',
      percentage: 92,
    },
    {
      countryKey: 'unitedStates',
      percentage: 21,
    },
    {
      countryKey: 'unitedKingdom',
      percentage: 8,
    },
  ],
  referralsData: [
    {
      name: 'Direct',
      value: 218,
    },
    {
      name: 'Google',
      value: 384,
    },
    {
      name: 'Duck Duck Go',
      value: 76,
    },
  ],
  devicesData: {
    mobilePercentage: 26,
    tabletPercentage: 10,
    desktopPercentage: 64,
  },
  browsersData: {
    chromePercentage: 99,
    chromeMobilePercentage: 50,
    firefoxPercentage: 24,
    edgePercentage: 18,
    safariPercentage: 3,
  },
}
