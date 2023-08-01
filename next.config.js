/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        port: "",
        pathname: "/featured/**",
      },
      {
        protocol: "https",
        hostname: "tutumi.pl",
        port: "",
        pathname: "/picture/fit-in/**",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
