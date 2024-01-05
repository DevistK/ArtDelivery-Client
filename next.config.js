/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        hostname: "oaidalleapiprodscus.blob.core.windows.net",
      },
    ],
  },
};

module.exports = nextConfig;
