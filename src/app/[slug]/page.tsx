'use client'
import { use } from 'react'
import { notFound } from 'next/navigation'
import { sitesData } from '@/library/sites'
import PageHeader from '../components/PageHeader'
import Divider from '../components/Divider'
import PlacehoderContent from '../components/PlaceholderContent'

interface Props {
  params: Promise<{
    slug: string
  }>
}

export default function SitePage({ params }: Props) {
  const { slug } = use(params)

  const site = sitesData.find((site) => site.slug === slug)

  if (!site) {
    notFound()
  }

  return (
    <>
      <PageHeader title={site.displayName} intro={site.description} />
      <Divider margin="my-6" />
      <PlacehoderContent />
    </>
  )
}
