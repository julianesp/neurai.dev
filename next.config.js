const path = require('path');

module.exports = {


  reactStrictMode: true,

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles/')],
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      }
    ]
  }


}