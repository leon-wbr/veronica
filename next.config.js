// next.config.js
const webpack = require('webpack');
const path = require('path');
const withPlugins = require('next-compose-plugins');
const sass = require('@zeit/next-sass')
const glob = require('glob');

let portfolio = glob.sync(path.resolve(__dirname, './data/portfolio/*.md'));
portfolio = portfolio.map(x => path.basename(x, '.md'));

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
      new webpack.DefinePlugin({
        'portfolioList': JSON.stringify(portfolio)
      })
    );

    config.module.rules.push(
      {
        test: /\.md$/,
        use: 'raw-loader'
      }
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

    portfolio.forEach(item => { paths[`/portfolio/${item}`] = { page: '/portfolio/[dataQuery]', query: { dataQuery: item } } });

    return paths;
  }
});
