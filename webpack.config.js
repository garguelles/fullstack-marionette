var entry = './public/apps/admin/main.js',
output = {
  path: __dirname,
  filename: '[name].js'
};
var path = require('path');

module.exports.development = {
  debug : true,
  devtool : 'eval',
  entry: {
    Admin: './public/apps/admin/main.js',
    Press: './public/apps/press/main.js'
  },
  output: output,
  module : {
    loaders : [{
      test: /\.js?$/,
      //exclude: /node_modules/,
      include: [ path.resolve(__dirname, "public/apps") ],
      loader: 'babel-loader'
    },
      {
        test: /\.jade/,
        include: [path.resolve(__dirname, "public/apps")],
        loader: 'jade-loader'
    }]
  }
};

module.exports.production = {
  debug: false,
  entry: {
    Admin: './public/apps/admin/main.js'
  },
  output: output,
  module : {
    loaders : [{
      test: /\.js?$/,
      //exclude: /node_modules/,
      include: [ path.resolve(__dirname, "public/apps") ],
      loader: 'babel-loader'
    },
      {
        test: /\.jade/,
        include: [path.resolve(__dirname, "public/apps")],
        loader: 'jade-loader'
    }]
  }
};
