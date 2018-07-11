const withTypescript = require('@zeit/next-typescript');
const withCss = require('@zeit/next-css');

module.exports = withTypescript(
  withCss({
    cssModules: true,
    webpack(config) {
      config.module.rules.push({
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: 'base64-inline-loader'
        }
      });
      return config;
    }
  })
);
