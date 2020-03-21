const path = require('path');

const glob = require('glob');

function getEntries(pattern) {
  const entries = {};

  glob.sync(pattern).forEach((file) => {
    let filename = file.replace('./packages/', '')
    filename = filename.replace('.jsx', '.js')
    entries[filename] = path.join(__dirname, file);
    // entries[file.replace('./packages/', '')] = path.join(__dirname, file);
  });

  return entries;
}

module.exports = {
  entry: getEntries('./**/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: '[name]',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],

  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              require("babel-preset-stage-1")
            ],
            plugins: [
              require("babel-plugin-transform-do-expressions"),
              require("babel-plugin-transform-function-bind")
            ]
          }
        }
      },
    ]
  }
};