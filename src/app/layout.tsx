import type { Metadata, Viewport } from 'next'
import clsx from 'clsx'
import './styles.tailwind.css'
import MenuBar from './components/menuBar'
import { AppProvider } from './components/AppProvider'

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
        'h-screen overflow-hidden overflow-x-hidden',
        'bg-gradient-to-tr from-sky-50 via-indigo-100 to-cyan-100'
      )}
    >
      <body className="h-screen overflow-hidden">
        <AppProvider>
          <div
            className={clsx(
              'w-full max-w-[94rem] mx-auto flex h-screen flex-col md:flex-row md:gap-6',
              'md:py-6 md:px-8'
            )}
          >
            <MenuBar />
            <div
              className={clsx(
                'w-full flex-1 bg-white bg-opacity-75',
                'md:border border-blue-500/30 rounded-lg',
                'py-8 px-6',
                'overflow-y-auto'
              )}
            >
              {children}
            </div>
          </div>
        </AppProvider>
      </body>
    </html>
  )
}
