module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {

    config.resolve.fallback = { fs: false };
    return config; // return the modified config
  },
  env: {
    PUBLIC_URL: '/',
  },
  images: {
    loader: 'imgix',
    path: 'https://example.com/myaccount/',
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    disableStaticImages: true,
  },
};

const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  cssModules: true
})

const withImages = require('next-images')
module.exports = withImages({
  webpack(config, options) {
    return config;
  }
})
