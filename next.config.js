/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
require('dotenv').config();
const nextConfig = {
    reactStrictMode: true,
    env: {
        productUrl: process.env.API_PRODUCT_API,
    }
};

module.exports = nextConfig;