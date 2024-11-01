/** @type {import('next').NextConfig} */

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true, // Utilisez `true` pour une redirection permanente (301)
      },
    ];
  },
  reactStrictMode: true,
};

export default nextConfig;
