import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  /* config options here */
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader']
    });

    return config;
  }
};

module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/about',
        permanent: true,
      }
    ]
  }
}

export default nextConfig;
