export default {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_STRAPI_URL: process.env.NEXT_PUBLIC_STRAPI_URL
  },
  output: 'standalone'
};
