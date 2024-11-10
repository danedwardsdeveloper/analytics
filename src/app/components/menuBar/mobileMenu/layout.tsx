import clsx from 'clsx'

import { MenuButton, HomeButton } from './MenuButtons'
import Divider from '../../Divider'
import TimeFilters from '../DateRangeButtons'
import SiteLinks from '../SiteLinks'
import { useApp } from '../../AppProvider'

export default function MobileMenuLayout() {
  const { menuOpen } = useApp()

  return (
    <div
      className={clsx(
        'pointer-events-auto',
        'w-full flex flex-col',
        'justify-end items-center',
        'border-b border-blue-200',
        'bg-gradient-to-r from-sky-50 via-indigo-100 to-cyan-100',
        'px-4'
      )}
    >
      <div className="flex justify-between w-full my-4">
        <HomeButton />
        <MenuButton />
      </div>
      <div
        className={clsx(
          'w-full overflow-hidden transition-all duration-700 ease-in-out',
          menuOpen ? 'max-h-screen' : 'max-h-0'
        )}
      >
        <div className="pb-4 flex flex-col justify-start w-full">
          <Divider margin="mt-0 mb-4" />
          <nav
            className="space-y-4"
            aria-label="Site Navigation"
            role="navigation"
          >
            <SiteLinks gap="gap-y-4" />
          </nav>
          <Divider margin="my-4" />
          <TimeFilters />
        </div>
      </div>
    </div>
  )
}
