const withPWA = require('next-pwa')({
  dest: 'public'
})  

module.exports = withPWA( {        
    reactStrictMode: true,    
  pwa: {
      name: 'To show like app native',
      manifestPath: './public/manifest.json',
      dest: 'public',
      register: true,
      mode: 'production',
      skipWaiting: true,
      // disable: false,
      disable: process.env.NODE_ENV === 'development',
  },
} )

const nextConfig = {
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig