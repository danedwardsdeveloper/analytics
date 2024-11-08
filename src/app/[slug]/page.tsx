import { notFound } from 'next/navigation'
import { sitesData } from '@/library/sites'
import PageHeader from '../components/PageHeader'

interface Props {
  params: {
    slug: string
  }
}

export default async function SitePage({ params: { slug } }: Props) {
  const site = sitesData.find((site) => site.slug === slug)

  if (!site) {
    notFound()
  }

  return (
    <>
      <PageHeader title={site.displayName} intro={site.description} />
      <hr className="my-12 w-full h-px border-0 bg-gradient-to-r from-violet-800/5 via-violet-800/20 to-violet-800/5" />
    </>
  )
}

export async function generateStaticParams() {
  return sitesData.map((site) => ({
    slug: site.slug,
  }))
}
