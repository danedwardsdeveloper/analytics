'use client'

import { useRouter } from 'next/navigation'
import { use, useEffect, useState } from 'react'

import {
  BrowsersData,
  DevicesData,
  PageViewsData,
} from '@/library/analyticsData'
import { apiRoutes } from '@/library/apiRoutes'
import { DatabaseNames } from '@/library/dbConfig'
import { sitesData } from '@/library/sites'
import { tempData } from '@/library/tempData'

import { useApp } from '@/components/AppProvider'
import CountriesList from '@/components/countriesList'
import DataCards from '@/components/DataCards'
import DataContainer from '@/components/DataContainer'
import Divider from '@/components/Divider'
import HardcodedDataWarning from '@/components/HardcodedDataWarning'
import {
  ChromeDesktopIcon,
  ChromeMobileIcon,
  EdgeIcon,
  FirefoxIcon,
  SafariIcon,
} from '@/components/icons/BrowserIcons'
import {
  DesktopIcon,
  MobileIcon,
  TabletIcon,
} from '@/components/icons/DeviceIcons'
import PageHeader from '@/components/PageHeader'
import PercentageDataList from '@/components/PercentageDataList'
import PlainDataList from '@/components/PlainDataList'
import Spinner from '@/components/Spinner'

const USE_DATABASE = false

function devicesDataToItems(data?: DevicesData) {
  if (!data) return []
  return [
    { name: 'Desktop', value: data.desktopPercentage, Icon: DesktopIcon },
    { name: 'Tablet', value: data.tabletPercentage, Icon: TabletIcon },
    { name: 'Mobile', value: data.mobilePercentage, Icon: MobileIcon },
  ]
}

function browsersDataToItems(data?: BrowsersData) {
  if (!data) return []
  return [
    { name: 'Chrome', value: data.chromePercentage, Icon: ChromeDesktopIcon },
    {
      name: 'Chrome Mobile',
      value: data.chromeMobilePercentage,
      Icon: ChromeMobileIcon,
    },
    { name: 'Firefox', value: data.firefoxPercentage, Icon: FirefoxIcon },
    { name: 'Edge', value: data.edgePercentage, Icon: EdgeIcon },
    { name: 'Safari', value: data.safariPercentage, Icon: SafariIcon },
  ]
}

interface Props {
  params: Promise<{
    slug: string
  }>
}

export default function Page({ params }: Props) {
  const { slug } = use(params)
  const { signedIn, timeRange, isLoading } = useApp()
  const router = useRouter()
  const [pageViewsData, setPageViewsData] = useState<PageViewsData | null>(null)
  const databaseName = `${slug}-analytics` as DatabaseNames

  useEffect(() => {
    if (!signedIn) {
      router.replace('/')
    }
  }, [signedIn, router])

  useEffect(() => {
    const fetchPageViews = async () => {
      try {
        const response = await fetch(
          `${apiRoutes.pageViews}?db=${databaseName}&timeRange=${timeRange}`,
        )
        const data = await response.json()
        setPageViewsData(data)
      } catch (error) {
        console.error('Failed to fetch page views:', error)
      }
    }

    if (USE_DATABASE) {
      fetchPageViews()
    }
  }, [signedIn, router, timeRange, databaseName])

  if (!signedIn) {
    return null
  }

  const site = sitesData.find((siteItem) => siteItem.slug === slug)

  if (!site) {
    return null
  }

  if (USE_DATABASE && !pageViewsData) {
    return null
  }

  const {
    totalViews,
    sessions,
    emailSubscriptions,
    pageViewsData: views,
    countriesData,
    referralsData,
    devicesData,
    browsersData,
    linkClicksData,
  } = tempData

  if (isLoading) {
    return (
      <>
        <PageHeader title={site.displayName} intro={site.description} />
        <HardcodedDataWarning display={true} />
        <Divider margin="my-6" />
        <div className="flex justify-center">
          <Spinner />
        </div>
      </>
    )
  }

  return (
    <>
      <PageHeader title={site.displayName} intro={site.description} />
      <HardcodedDataWarning display={true} />
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
          <CountriesList countriesData={countriesData} />

          <DataContainer title="Browsers">
            <PercentageDataList items={browsersDataToItems(browsersData)} />
          </DataContainer>

          <DataContainer title="Devices">
            <PercentageDataList items={devicesDataToItems(devicesData)} />
          </DataContainer>

          <DataContainer title="Referrals">
            <PlainDataList items={referralsData} />
          </DataContainer>

          <DataContainer title="Page views">
            <PlainDataList items={views} />
          </DataContainer>

          <DataContainer title="Link clicks">
            <PlainDataList items={linkClicksData} />
          </DataContainer>
        </div>
      </div>
    </>
  )
}
