'use client'

import { useEffect } from 'react'

import { useApp } from './AppProvider'

const disableAuthHandler = true

export function AuthStateHandler() {
  const { setSignedIn } = useApp()

  useEffect(() => {
    if (disableAuthHandler) {
      async function checkAuthStatus() {
        const response = await fetch(window.location.href)
        const signedIn = response.headers.get('x-user-signed-in') === 'true'
        setSignedIn(signedIn)
      }

      checkAuthStatus()
    }
  }, [setSignedIn])

  return null
}
