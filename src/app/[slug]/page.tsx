'use client'

import { useRouter } from 'next/navigation'
import { use, useEffect, useState } from 'react'

import { PageViewsData } from '@/library/analyticsData'
import { DatabaseNames } from '@/library/dbConfig'
import { sitesData } from '@/library/sites'

import { useApp } from '../../components/AppProvider'
import Divider from '../../components/Divider'
import PageHeader from '../../components/PageHeader'
import DataCards from './components/DataCards'
import GridList from './components/GridList'
import HardcodedDataWarning from './components/HardcodedDataWarning'

const USE_DATABASE = true

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

  const formattedPageViewsData: PageViewsData = USE_DATABASE
    ? {
        title: 'Page views',
        totalViews: pageViewsData.totalViews,
        items: pageViewsData.items.map((page) => ({
          name: page.name,
          value: page.value,
        })),
      }
    : {
        title: 'Page views',
        totalViews: 47,
        items: [
          { name: 'Home', value: 2456 },
          { name: '/about', value: 1123 },
          { name: '/contact', value: 864 },
          { name: '/newsletter', value: 542 },
        ],
      }

  return (
    <div className="space-y-8">
      <PageHeader title={site.displayName} intro={site.description} />
      <HardcodedDataWarning display={!USE_DATABASE} />
      <Divider margin="my-6" />
      <DataCards
        titleOne="Page views"
        valueOne={formattedPageViewsData.totalViews}
        titleTwo="Sessions"
        valueTwo={46}
      />
      <Divider margin="my-6" />
      <div className="flex flex-col divide-y divide-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
          <GridList
            title={formattedPageViewsData.title}
            items={formattedPageViewsData.items}
          />
        </div>
      </div>
    </div>
  )
}
