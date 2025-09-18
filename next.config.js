/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost', 'x3o.ai', 'api.x3o.ai'],
  },
  env: {
    NEXT_PUBLIC_APP_NAME: 'x3o.ai',
    NEXT_PUBLIC_APP_URL: process.env.NODE_ENV === 'production' ? 'https://x3o.ai' : 'http://localhost:3010',
    NEXT_PUBLIC_API_URL: process.env.NODE_ENV === 'production' ? 'https://api.x3o.ai' : 'http://localhost:3011',
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig