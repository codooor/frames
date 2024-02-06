/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    metadataBase: 'https://frames-alpha.vercel.app/',
  },
  async redirects() {
    return [
      {
        source: '/cosmiccowboys',
        destination: 'https://cosmiccowboys.cloud',
        permanent: false,
      },
      {
        source: '/pinatacloud',
        destination: 'https://pinata.cloud/blog',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
