import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  pageExtensions: ['ts', 'tsx'],
  images: {
    formats: ['image/webp'],
  },
}

export default nextConfig
