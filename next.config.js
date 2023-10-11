/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        BASE_URL: process.env.BASE_URL,
        POST_USER: process.env.POST_USERNAME,
        POST_PASS: process.env.POST_PASSWORD,
        API_USERNAME: process.env.API_USERNAME,
        API_PASSWORD: process.env.API_PASSWORD,
    }

}

module.exports = nextConfig
