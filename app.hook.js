require("babel-register")({
   presets: [ 'es2015' ]
});
require("babel-core").transform("code", {
  plugins: ["transform-object-assign"]
});
module.exports = require('/reducers/homepage.reducers.js');
//module.exports = require('./index.js');
