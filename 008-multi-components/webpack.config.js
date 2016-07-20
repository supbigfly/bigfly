var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  //从这里得到文件
  output: {
    path: path.resolve(__dirname, 'build'),
    //新建这个文件夹
    filename: 'bundle.js'
    //在这个文件夹下新建这个文件，目的是讲es6转换成es5
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
};
