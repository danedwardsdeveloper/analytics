'use client'

import { useRouter } from 'next/navigation'
import { use, useEffect, useState } from 'react'

import { PageViewsData } from '@/library/analyticsData'
import { DatabaseNames } from '@/library/dbConfig'
import { sitesData } from '@/library/sites'
import { tempData } from '@/library/tempData'

import { useApp } from '../../components/AppProvider'

import SiteAnalyticsLayout from './siteAnalyticsLayout'

const USE_DATABASE = false

interface Props {
  params: Promise<{
    slug: string
  }>
}

export default function SitePage({ params }: Props) {
  const { slug } = use(params)
  const { signedIn, timeRange } = useApp()
  const router = useRouter()
  const [pageViewsData, setPageViewsData] = useState<PageViewsData | null>(null)
  const databaseName = `${slug}-analytics` as DatabaseNames

  useEffect(() => {
    if (!signedIn) {
      router.replace('/sign-in')
      return
    }

    const fetchPageViews = async () => {
      try {
        const response = await fetch(
          `/api/page-views?db=${databaseName}&timeRange=${timeRange}`,
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

  return (
    <SiteAnalyticsLayout
      siteDisplayName={site.displayName}
      siteDescription={site.description}
      useHardcodedData={true}
      totalViews={tempData.totalViews}
      sessions={tempData.sessions}
      emailSubscriptions={tempData.emailSubscriptions}
      pageViewsData={tempData.pageViewsData}
      countriesData={tempData.countriesData}
      referralsData={tempData.referralsData}
      devicesData={tempData.devicesData}
      browsersData={tempData.browsersData}
    />
  )
}
