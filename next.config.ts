import { NextConfig } from 'next';

const nextConfig: NextConfig = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.html$/,
            type: "asset/resource", // Treat .html files as static assets
        });
        return config;
    },
};

export default nextConfig;
