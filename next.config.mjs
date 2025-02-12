/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["images.unsplash.com"],
    },
    async redirects() {
        return [
            {
                source: "/favicon.ico",
                destination: "/",
                permanent: false,
            },
        ];
    },
};

export default nextConfig;
