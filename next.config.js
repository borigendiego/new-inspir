const withOptimizedImages = require('next-optimized-images');
const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

module.exports = withPlugins(
    [withOptimizedImages, withBundleAnalyzer],
    {
        webpack(config, se) {
            if (!se.isServer) {
                config.resolve.fallback.fs = false;
            }

            return config
        },
    })
