const { composePlugins, withNx } = require('@nx/webpack');
const TerserPlugin = require("terser-webpack-plugin");

// Nx plugins for webpack.
module.exports = composePlugins(
  withNx({
    target: 'node',
  }),
  (config) => {
    // Update the webpack config as needed here.
    // e.g. `config.plugins.push(new MyPlugin())`
    // config.devtool = 'nosources-source-map';
    config.optimization = {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            sourceMap: true,
            compress: true,
            mangle: {
              toplevel: true,
            },
            keep_classnames: true,
            keep_fnames: true,
            toplevel: true,
            output: {
              beautify: true,
            },
          },
          parallel: true,
        }),
      ]
    }
    return config;
  },
);
