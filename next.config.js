/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'standalone',
  // experimental: {
  //   appDir: false,    
  // },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
