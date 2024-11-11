import { AppProvider } from '../components/AppProvider'
import MenuBar from '../components/menuBar'
import './styles.tailwind.css'

import clsx from 'clsx'
import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: `Dan's Analytics`,
}

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en-GB"
      suppressHydrationWarning
      className={clsx(
        'h-screen overflow-hidden',
        'bg-gradient-to-tr from-sky-50 via-indigo-100 to-cyan-100',
      )}
    >
      <body className="overflow-hidden">
        <AppProvider>
          <div
            className={clsx(
              'w-full max-w-[94rem] mx-auto flex h-screen flex-col md:flex-row overflow-hidden md:gap-6',
              'md:py-6 md:px-8',
            )}
          >
            <MenuBar />
            {children}
          </div>
        </AppProvider>
      </body>
    </html>
  )
}
