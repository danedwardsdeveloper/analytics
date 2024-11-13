import { isProduction } from './environment'

const oneMonthInSeconds = 30 * 24 * 60 * 60

export const cookieName = 'token'

type CookieOptions = {
  name: 'token'
  value: string
  httpOnly: boolean
  secure: boolean
  sameSite: 'strict'
  maxAge: number
  path: string
}

export function createCookieOptions(tokenValue: string): CookieOptions {
  return {
    name: 'token',
    value: tokenValue,
    httpOnly: true,
    secure: isProduction,
    sameSite: 'strict',
    maxAge: oneMonthInSeconds,
    path: '/',
  }
}

export interface Token {
  sub: string
  exp: number
}

export function generateTokenPayload(userId: string): Token {
  return {
    sub: userId,
    exp: Math.floor(Date.now() / 1000) + oneMonthInSeconds,
  }
}
