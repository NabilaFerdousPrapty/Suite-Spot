import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["i.ibb.co.com","i.ibb.co",'images.unsplash.com','img.clerk.com'], // Add the domain of the external image
  },
};

export default nextConfig;
