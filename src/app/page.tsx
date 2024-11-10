'use client'
import clsx from 'clsx'
import PageHeader from './components/PageHeader'
import PlacehoderContent from './components/PlaceholderContent'
import { useApp } from './components/AppProvider'
import SignInForm from './components/signInForm'

export default function Home() {
  const { signedIn } = useApp()

  return (
    <div
      role="main"
      className={clsx(
        'w-full flex-1 bg-white bg-opacity-75',
        'md:border border-blue-500/30 md:rounded-lg',
        'pt-12 px-12 pb-60',
        signedIn && 'overflow-y-auto'
      )}
    >
      {signedIn ? (
        <>
          <div data-header-offset className="md:hidden h-[70px]" />
          <PageHeader
            title="Dan's Analytics"
            intro="Welcome to my privacy-first analytics site"
          />
          <PlacehoderContent />
        </>
      ) : (
        <SignInForm />
      )}
    </div>
  )
}
