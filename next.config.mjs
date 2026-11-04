const R2_PUBLIC_URL = 'https://pub-885d301f2b71496eb1ba5f23aba11af8.r2.dev';

/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
    },
    async redirects() {
        return [
            {
                source: '/images/:path*',
                destination: `${R2_PUBLIC_URL}/images/:path*`,
                permanent: false,
            },
            {
                source: '/portfolio/:path*',
                destination: `${R2_PUBLIC_URL}/portfolio/:path*`,
                permanent: false,
            },
        ];
    },
};

export default nextConfig;

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
