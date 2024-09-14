/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // <=== enables static exports
    reactStrictMode: true,
    basePath: "/next-todolist",
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
            },
        ],
    },
};

export default nextConfig;
