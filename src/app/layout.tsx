import type { Metadata, Viewport } from 'next'
import './styles.tailwind.css'
import MenuBar from './components/menuBar'

export const metadata: Metadata = {
  title: 'Dan Edwards Analytics',
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
      className="h-screen overflow-hidden bg-gradient-to-tr from-sky-50 via-indigo-100 to-cyan-100"
    >
      <body className="h-screen overflow-hidden">
        <div className="w-full max-w-[94rem] mx-auto flex h-screen flex-col lg:flex-row gap-6 py-6 px-4 sm:px-8 max-sm:pb-24">
          <div className="lg:w-72">
            <MenuBar />
          </div>
          <div className="w-full flex-1 bg-white bg-opacity-75 border border-blue-500/30 rounded-lg py-8 px-6">
            <h1>{children}</h1>
          </div>
        </div>
      </body>
    </html>
  )
}
