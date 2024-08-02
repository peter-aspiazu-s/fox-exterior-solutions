/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    // domains: ['rosari-construction.com'], // Añade dominios externos si las imágenes están alojadas fuera
    // loader: 'default',
    // Si utilizas un CDN para las imágenes, puedes configurar el loader:
    // loader: 'imgix',
    // path: 'https://example.com/myaccount/',
  },
  reactStrictMode: true,
}

module.exports = nextConfig
