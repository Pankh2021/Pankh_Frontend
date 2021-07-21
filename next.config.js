module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    return config; // return the modified config
  },
};

const withImages = require('next-images')
module.exports = withImages()
