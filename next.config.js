const withOptimizedImages = require('next-optimized-images');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins(
    [withOptimizedImages],
    {
        webpack(config, options) {
            if (!options.isServer) {
                config.node = {
                    fs: 'empty'
                }
            }

            return config
        },
})
