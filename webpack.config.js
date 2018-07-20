const path = require("path"); //required to help webpack output in directory

module.exports = {
  mode: "development", //faster build
  entry: "./index.js", //your main js script
  output: {
    //an object that features where webpack sends bundled js
    path: path.resolve(__dirname, "build"), //requires path module. creates build folder
    filename: "bundle.js" //this can be any name you want
  },
  module: {
    rules: [
      //an array of things to be done by webpack. this is where babel comes in.
      {
        test: /\.js$/, //tests for all javascript files. the $ means 'ends with'
        exclude: /node_modules/, //stop webpack from bundling all our node modules
        use: ["babel-loader"] //use babel-loader to compile our ES6 into ES5
      }
    ]
  }
};
