import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  /* config options here */
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack", "url-loader"],
    });

    return config;
  },
  reactStrictMode: true,
  // Suppress hydration warnings caused by browser extensions
  onRecoverableError: (error: any) => {
    if (error.message.includes('Hydration')) {
      console.log('Suppressing hydration error:', error.message);
    } else {
      throw error;
    }
  },
};

module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/about",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
