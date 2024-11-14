import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

import { cookieName } from '@/library/cookies'

export async function GET() {
  const cookieStore = await cookies()
  const token = cookieStore.get(cookieName)
  console.log('Token cookie:', token)

  const isAuthenticated = token !== undefined && token !== null
  return NextResponse.json({ authenticated: isAuthenticated })
}
