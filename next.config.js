const withOptimizedImages = require('next-optimized-images');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins(
    [withOptimizedImages],
    {
        webpack(config, se) {
            if (!se.isServer) {
                config.resolve.fallback.fs = false;
            }
            return config
        },
    }
);
