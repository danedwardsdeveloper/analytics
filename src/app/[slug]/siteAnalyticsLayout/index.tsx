import clsx from 'clsx'

import {
  BrowsersData,
  DevicesData,
  SiteAnalyticsData,
} from '@/library/analyticsData'

import Divider from '@/components/Divider'
import PageHeader from '@/components/PageHeader'

import CountriesList from './countriesList'
import DataCards from './DataCards'
import {
  DataListContainer,
  DataListItems,
  PercentageDataItems,
} from './DataList'
import HardcodedDataWarning from './HardcodedDataWarning'

function devicesDataToItems(data: DevicesData) {
  return [
    { name: 'Desktop', value: data.desktopPercentage },
    { name: 'Tablet', value: data.tabletPercentage },
    { name: 'Mobile', value: data.mobilePercentage },
  ]
}

function browsersDataToItems(data: BrowsersData) {
  return [
    { name: 'Chrome', value: data.chromePercentage },
    { name: 'Chrome Mobile', value: data.chromeMobilePercentage },
    { name: 'Firefox', value: data.firefoxPercentage },
    { name: 'Edge', value: data.edgePercentage },
    { name: 'Safari', value: data.safariPercentage },
  ]
}

interface SiteAnalyticsLayoutProps extends SiteAnalyticsData {
  siteDisplayName: string
  siteDescription: string
  useHardcodedData: boolean
}

export default function SiteAnalyticsLayout({
  siteDisplayName,
  siteDescription,
  totalViews,
  sessions,
  emailSubscriptions,
  pageViewsData,
  countriesData,
  referralsData,
  devicesData,
  browsersData,
  useHardcodedData,
}: SiteAnalyticsLayoutProps) {
  return (
    <div
      role="main"
      className={clsx(
        'w-full flex-1 bg-white bg-opacity-75',
        'md:border border-blue-500/30 md:rounded-lg',
        'pt-8 px-6 ',
        'md:pt-12 md:px-12 pb-60',
        'overflow-y-auto',
      )}
    >
      <div data-header-offset className="md:hidden h-[70px]" />
      <div className="space-y-8">
        <PageHeader title={siteDisplayName} intro={siteDescription} />
        <HardcodedDataWarning display={useHardcodedData} />
        <Divider margin="my-6" />
        <DataCards
          cards={[
            { title: 'Page views', value: totalViews },
            { title: 'Sessions', value: sessions },
            { title: 'Email subscriptions', value: emailSubscriptions },
          ]}
        />
        <Divider margin="my-6" />
        <div className="flex flex-col divide-y divide-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 py-8">
            <DataListContainer title={`Page views`}>
              <DataListItems items={pageViewsData} />
            </DataListContainer>

            <CountriesList countriesData={countriesData} />

            <DataListContainer title={`Devices`}>
              <PercentageDataItems items={devicesDataToItems(devicesData)} />
            </DataListContainer>

            <DataListContainer title={`Browsers`}>
              <PercentageDataItems items={browsersDataToItems(browsersData)} />
            </DataListContainer>

            <DataListContainer title="Referrals">
              <DataListItems items={referralsData} />
            </DataListContainer>
          </div>
        </div>
      </div>
    </div>
  )
}
