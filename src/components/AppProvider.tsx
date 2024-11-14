'use client'

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

import { apiRoutes } from '@/library/apiRoutes'

export type TimeRange = '30days' | 'alltime'
export type Message = string | null
export type MessageColours = 'green' | 'red' | 'gray'

interface AppContextValue {
  signedIn: boolean
  setSignedIn: (value: boolean) => void
  message: Message
  setMessage: (value: Message) => void
  messageColour: MessageColours
  setMessageColour: (value: MessageColours) => void
  timeRange: TimeRange
  setTimeRange: (value: TimeRange) => void
  menuOpen: boolean
  setMenuOpen: (value: boolean) => void
  isLoading: boolean
  setIsLoading: (value: boolean) => void
}

const AppContext = createContext<AppContextValue | undefined>(undefined)

export function AppProvider({ children }: { children: ReactNode }) {
  const [signedIn, setSignedIn] = useState(false)
  const [rawMessage, setRawMessage] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)
  const [messageCount, setMessageCount] = useState(1)
  const [messageColour, setMessageColour] = useState<MessageColours>('gray')
  const [timeRange, setTimeRange] = useState<TimeRange>('30days')
  const [menuOpen, setMenuOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const setMessageWithCount = useCallback(
    (newMessage: string | null) => {
      if (newMessage === null) {
        setRawMessage(null)
        setMessage(null)
        setMessageCount(1)
        return
      }

      if (newMessage === rawMessage) {
        const newCount = messageCount + 1
        setMessageCount(newCount)
        setMessage(newCount > 1 ? `${newMessage} (${newCount})` : newMessage)
      } else {
        setRawMessage(newMessage)
        setMessage(newMessage)
        setMessageCount(1)
      }
    },
    [rawMessage, messageCount],
  )

  const contextValue = {
    signedIn,
    setSignedIn,
    message,
    setMessage: setMessageWithCount,
    messageColour,
    setMessageColour,
    timeRange,
    setTimeRange,
    menuOpen,
    setMenuOpen,
    isLoading,
    setIsLoading,
  }

  const checkAuthState = async () => {
    try {
      const response = await fetch(apiRoutes.authCheck, {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error('Auth check failed')
      }

      const data = await response.json()
      setSignedIn(data.authenticated)
    } catch (error) {
      console.error('Error checking auth state:', error)
      setSignedIn(false)
    }
  }

  useEffect(() => {
    checkAuthState()
  }, [])

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
