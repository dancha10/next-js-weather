import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  "output": "export",
  "trailingSlash": true,
  "images": {
    "unoptimized": true,
    "domains": [
      "images.unsplash.com"
    ]
  },
  "basePath": "/next-js-weather",
  "assetPrefix": "/next-js-weather/"
};

export default nextConfig;
