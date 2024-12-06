// @ts-nocheck
import { generateHash } from './src/app/api/auth/sign-in/route'

async function createPasswordHash() {
  const password = 'my-password'
  try {
    const hash = await generateHash(password)
    /* eslint-disable */
    console.log('Password hash:')
    console.log(hash)
    /* eslint-enable */
  } catch (error) {
    console.error('Error generating hash:', error)
  }
}

createPasswordHash()

// pnpm tsx generateHash.ts
