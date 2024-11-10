'use client'
import { createContext, ReactNode, useContext, useState } from 'react'

export type TimeRange = '30days' | 'alltime'

interface AppContextValue {
  signedIn: boolean
  setSignedIn: (value: boolean) => void
  message: string | null
  setMessage: (value: string | null) => void
  timeRange: TimeRange
  setTimeRange: (value: TimeRange) => void
  menuOpen: boolean
  setMenuOpen: (value: boolean) => void
}

const AppContext = createContext<AppContextValue | undefined>(undefined)

export function AppProvider({ children }: { children: ReactNode }) {
  const [signedIn, setSignedIn] = useState(true)
  const [message, setMessage] = useState<string | null>(null)
  const [timeRange, setTimeRange] = useState<TimeRange>('30days')
  const [menuOpen, setMenuOpen] = useState(false)

  const contextValue = {
    signedIn,
    setSignedIn,
    message,
    setMessage,
    timeRange,
    setTimeRange,
    menuOpen,
    setMenuOpen,
  }

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider')
  }
  return context
}
