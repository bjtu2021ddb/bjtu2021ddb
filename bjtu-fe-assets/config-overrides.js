const path = require('path');

module.exports = function override(config, env) {
  // alias
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve('src'),
  };
  return config;
};
