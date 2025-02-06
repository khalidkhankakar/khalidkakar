/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '"e9p6lwdva5ykaks3.public.blob.vercel-storage.com"',
            },
        ],
    }
};

export default nextConfig;
