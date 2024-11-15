import clsx from 'clsx'
import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div
      role="main"
      className={clsx(
        'w-full flex-1 bg-white bg-opacity-75',
        'md:border border-blue-500/30 md:rounded-lg',
        'pt-8 px-6 ',
        'md:pt-12 md:px-12 pb-60',
        'overflow-y-auto',
      )}
    >
      <div data-header-offset className="md:hidden h-[70px]" />
      <div className="space-y-8">{children}</div>
    </div>
  )
}
