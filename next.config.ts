import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    // There is no Next server on Firebase Hosting to run /_next/image, so the
    // optimizer URLs it generates 404. Emit plain <img> src paths instead.
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
