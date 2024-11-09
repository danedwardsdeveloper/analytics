'use client'
import { useEffect } from 'react'
import PageHeader from './components/PageHeader'
import PlacehoderContent from './components/PlaceholderContent'
import { useApp } from './components/AppProvider'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  const { signedIn } = useApp()

  useEffect(() => {
    if (!signedIn) {
      router.push('/sign-in')
    }
  }, [signedIn, router])

  return (
    <>
      <PageHeader
        title="Dan's Analytics"
        intro="Welcome to my privacy-first analytics site"
      />
      <PlacehoderContent />
    </>
  )
}
