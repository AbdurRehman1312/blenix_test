/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true, // Ensures each route has its own index.html
    images: {
        unoptimized: true
    }
};

export default nextConfig;
