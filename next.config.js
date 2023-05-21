/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_INFOJOBS_TOKEN: process.env.INFOJOBS_TOKEN,
    },
}

module.exports = nextConfig
