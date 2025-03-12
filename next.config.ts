import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {hostname:"fast-grouse-675.convex.cloud"}
    ]
  }
};

export default nextConfig;



// Allow Remote Images from a Specific Host

// The images.remotePatterns array allows images to be loaded from external domains.
// Here, it specifies that images can be fetched from fast-grouse-675.convex.cloud.