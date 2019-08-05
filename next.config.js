// next.config.js
const webpack = require('webpack');
const path = require('path');
const withPlugins = require('next-compose-plugins');
const sass = require('@zeit/next-sass')
const portfolioData = require('./data/portfolio.json');

module.exports = withPlugins([
  [sass, {
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]___[hash:base64:5]",
    }
  }]
],
{
  webpack: (config, { dev }) => {
    config.plugins.push(
      new webpack.EnvironmentPlugin(process.env),
    );

    // Config to have absolute imports instead of relative imports
    config.resolve.alias['components'] = path.join(__dirname, 'components')
    config.resolve.alias['static'] = path.join(__dirname, 'static')

    return config;
  },
  exportPathMap: function() {
    const paths = {
      '/': { page: '/' }
    }

    portfolioData.forEach(item => { paths[`/portfolio/${item.id}`] = { page: '/portfolio/[dataQuery]', query: { dataQuery: item.id } } });

    return paths;
  }
});
