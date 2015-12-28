var entry = './public/apps/admin/main.js',
output = {
  path: __dirname,
  filename: 'main.js'
};
var path = require('path');

module.exports.development = {
  debug : true,
  devtool : 'eval',
  entry: entry,
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
  entry: entry,
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
