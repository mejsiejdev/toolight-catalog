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
        pathname: "/picture/fit-in/1663x936/filters:fill(white)/**",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
