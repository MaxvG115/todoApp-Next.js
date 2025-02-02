/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    typescript: {
        ignoreBuildErrors: true
    },
    eslint: {
        ignoreBuildErrors: true
    }
};

export default nextConfig;
