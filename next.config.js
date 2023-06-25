/** @type {import('next').NextConfig} */
const nextConfig = {
    serverRuntimeConfig: {
      // Will only be available on the server side
      mySecret: 'secret',
      port: process.env.PORT || 3000,
    },
    publicRuntimeConfig: {
      // Will be available on both server and client
      staticFolder: '/static',
    },
  }

module.exports = nextConfig
