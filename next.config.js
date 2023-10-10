/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        BASE_URL: process.env.BASE_URL,
        POST_USER: process.env.POST_USERNAME,
        POST_PASS: process.env.POST_PASSWORD,
    }

}

module.exports = nextConfig
