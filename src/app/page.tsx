'use client'
import PageHeader from './components/PageHeader'
import PlacehoderContent from './components/PlaceholderContent'
import { useApp } from './components/AppProvider'

export default function Home() {
  const { updateAppState, signedIn } = useApp()

  function handleToggle(event: React.MouseEvent) {
    event.preventDefault()
    updateAppState({
      signedIn: !signedIn,
      message: !signedIn ? null : 'Please sign in',
    })
  }

  return (
    <>
      <PageHeader
        title="Dan's Analytics"
        intro="Welcome to my privacy-first analytics site"
      />
      <button
        onClick={handleToggle}
        className="px-4 py-2 my-3 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {signedIn ? 'Sign Out' : 'Sign In'}
      </button>
      <PlacehoderContent />
    </>
  )
}
