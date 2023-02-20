const webpack = require('webpack');
const { composePlugins, withNx } = require('@nrwl/webpack');
const { withReact } = require('@nrwl/react');
const { merge } = require('webpack-merge');
const dotenv = require('dotenv');

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), withReact(), (config) => {
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`
  dotenv.config();
  const { env } = process;

  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});
  console.log('envKeys')
  console.log(envKeys)
  return merge(config, {
    plugins: [
      new webpack.DefinePlugin(envKeys)
    ]
  });
});
