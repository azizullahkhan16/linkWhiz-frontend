/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home-page",
        permanent: true, // This means it's a permanent redirect (301)
      },
    ];
  },
};

export default nextConfig;
