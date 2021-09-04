const withOptimizedImages = require('next-optimized-images');
const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

module.exports = withPlugins(
    [withOptimizedImages, withBundleAnalyzer],
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
