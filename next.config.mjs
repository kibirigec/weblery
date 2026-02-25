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
    experimental: {
        turbopack: {
            root: '/Users/Calvin/Desktop/PROJECTS/modiqube',
        },
    },
};

export default nextConfig;
