'use client'
import { useEffect, use } from 'react'
import { useRouter } from 'next/navigation'
import { sitesData } from '@/library/sites'
import PageHeader from '../components/PageHeader'
import { useApp } from '../components/AppProvider'
import GridList from './components/GridList'
import Divider from '../components/Divider'
const siteData = [
  {
    title: 'Browsers',
    unit: '%',
    items: [
      { name: 'Chrome', value: 64 },
      { name: 'Chrome Mobile', value: 16 },
      { name: 'Microsoft Edge', value: 10 },
      { name: 'Firefox', value: 8 },
    ],
  },
  {
    title: 'Devices',
    unit: '%',
    items: [
      { name: 'Mobile', value: 8 },
      { name: 'Tablet', value: 0 },
      { name: 'Desktop', value: 92 },
    ],
  },
  {
    title: 'Pages',
    items: [
      { name: 'Home', value: 2456 },
      { name: '/about', value: 1123 },
      { name: '/contact', value: 864 },
      { name: '/newsletter', value: 542 },
    ],
  },
  {
    title: 'Countries',
    unit: '%',
    items: [
      { name: 'United Kingdom', value: 43 },
      { name: 'Germany', value: 18 },
      { name: 'Brazil', value: 14 },
      { name: 'United States', value: 13 },
      { name: 'Russian Federation', value: 10 },
    ],
  },
  {
    title: 'Referrals',
    items: [
      { name: 'Direct', value: 1842 },
      { name: 'Google', value: 943 },
      { name: 'Duck Duck Go', value: 253 },
    ],
  },
]

interface Props {
  params: Promise<{
    slug: string
  }>
}

export default function SitePage({ params }: Props) {
  const { slug } = use(params)
  const { signedIn } = useApp()
  const router = useRouter()

  useEffect(() => {
    if (!signedIn) {
      router.replace('/sign-in')
    }
  }, [signedIn, router])

  if (!signedIn) {
    return null
  }

  const site = sitesData.find((siteItem) => siteItem.slug === slug)

  if (!site) {
    return null
  }

  return (
    <div className="space-y-8">
      <PageHeader title={site.displayName} intro={site.description} />
      <Divider margin="my-6" />
      <div className="flex flex-col divide-y divide-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2  pb-8">
          {siteData.slice(0, 2).map((section) => (
            <div key={section.title} className="max-w-sm">
              <GridList
                title={section.title}
                items={section.items}
                unit={section.unit}
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
          {siteData.slice(2, 4).map((section) => (
            <div key={section.title} className="max-w-sm">
              <GridList
                title={section.title}
                items={section.items}
                unit={section.unit}
              />
            </div>
          ))}
        </div>
        <div className="pt-8">
          {siteData.slice(4).map((section) => (
            <div key={section.title} className="max-w-sm">
              <GridList
                title={section.title}
                items={section.items}
                unit={section.unit}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
