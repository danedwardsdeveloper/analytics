'use client'
import { apiRoutes } from '@/library/apiRoutes'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

export interface AppState {
  message: string | null
  signedIn: boolean
}

interface AppContextType extends AppState {
  isLoading: boolean
  // eslint-disable-next-line no-unused-vars
  updateAppState: (updates: Partial<AppState>) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export async function validateToken() {
  try {
    const response = await fetch(apiRoutes.validateToken, {
      method: 'GET',
      credentials: 'include',
    })
    if (!response.ok) {
      return null
    }
    return await response.json()
  } catch (error) {
    console.error('Token validation error:', error)
    return null
  }
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)
  const [appState, setAppState] = useState<AppState>({
    message: null,
    signedIn: false,
  })

  useEffect(() => {
    const initializeApp = async () => {
      const validationResult = await validateToken()
      const updates: Partial<AppState> = {
        signedIn: !!validationResult,
        message: validationResult ? null : 'Please sign in',
      }
      setAppState((prevState) => ({ ...prevState, ...updates }))
      setIsLoading(false)
    }

    initializeApp()
  }, [])

  const updateAppState = (updates: Partial<AppState>) => {
    setAppState((prevState) => ({ ...prevState, ...updates }))
  }

  const contextValue: AppContextType = {
    ...appState,
    isLoading,
    updateAppState,
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
