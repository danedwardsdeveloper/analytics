import { generateHash } from './src/app/api/auth/sign-in/route'

async function createPasswordHash() {
  const password = ''
  try {
    const hash = await generateHash(password)
    console.log('Your password hash (add this to .env as ADMIN_PASSWORD_HASH):')
    console.log(hash)
  } catch (error) {
    console.error('Error generating hash:', error)
  }
}

createPasswordHash()

// pnpm tsx generateHst.ts
