import jwt from 'jsonwebtoken'
import { NextRequest, NextResponse } from 'next/server'

import { cookieName, Token } from '@/library/cookies'

const jwtSecret = process.env.JWT_SECRET as string

if (!jwtSecret) {
  throw new Error('JWT_SECRET missing')
}

const publicPaths = ['/sign-in', '/api/auth/sign-in']

export async function middleware(request: NextRequest) {
  const response = NextResponse.next()

  if (publicPaths.includes(request.nextUrl.pathname)) {
    return response
  }

  const token = request.cookies.get(cookieName)

  try {
    if (token?.value) {
      const _decoded = jwt.verify(token.value, jwtSecret) as Token
      response.headers.set('x-user-signed-in', 'true')
      return response
    }
  } catch {
    response.headers.set('x-user-signed-in', 'false')
    return response
  }

  response.headers.set('x-user-signed-in', 'false')
  return response
}
