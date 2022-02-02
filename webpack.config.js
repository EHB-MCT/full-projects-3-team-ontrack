const path = require('path');

module.exports = {
  entry:{
    main: './src/index.js',
    facemesh: './src/facemesh.js',
    utilities: './src/utilities.js'
  },
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: '[name].js',
  },
  mode: 'development'
};