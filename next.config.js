/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  experimental: {
    serverActions: {}, // enable Server Actions
  },
};

module.exports = nextConfig;
