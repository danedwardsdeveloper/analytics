import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { NextRequest, NextResponse } from 'next/server'

import { createCookieOptions, generateTokenPayload } from '@/library/cookies'

const adminEmail = process.env.ADMIN_EMAIL as string
const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH as string
const jwtSecret = process.env.JWT_SECRET as string

if (!adminEmail) {
  throw new Error('ADMIN_EMAIL missing')
}
if (!adminPasswordHash) {
  throw new Error('ADMIN_PASSWORD_HASH missing')
}
if (!jwtSecret) {
  throw new Error('JWT_SECRET missing')
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password } = body

    if (email !== adminEmail) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 },
      )
    }

    const passwordMatch = await bcrypt.compare(password, adminPasswordHash)
    if (!passwordMatch) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 },
      )
    }

    const tokenPayload = generateTokenPayload(adminEmail)
    const token = jwt.sign(tokenPayload, jwtSecret)

    const response = NextResponse.json({ success: true }, { status: 200 })

    const cookieOptions = createCookieOptions(token)
    response.cookies.set(cookieOptions)

    return response
  } catch (error) {
    console.error('Sign-in error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    )
  }
}

// Helper to generate password hash for env variable:
// Use in development only
// export async function generateHash(password: string) {
//   const salt = await bcrypt.genSalt(10)
//   return bcrypt.hash(password, salt)
// }
