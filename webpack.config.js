const path = require('path');
const SRC_DIR = path.join(__dirname, '/client');
const DIST_DIR = path.join(__dirname, '/dist');
module.exports = {
  entry: `${SRC_DIR}/index.js`,
  output: {
  filename: 'bundle.js',
  path: DIST_DIR
},
  module : {
    rules : [
      {
        test : /\.js?/,
        include : SRC_DIR,
        loader : 'babel-loader',
      }, 
      {
        test: /\.css?/,
        include : SRC_DIR,
        use: ['style-loader', 'css-loader'],
      }
    ]
  }
};