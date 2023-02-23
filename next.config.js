/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['stkwmhwpypedanojkifp.supabase.co']
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
