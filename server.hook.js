require("babel-register")({
   presets: [ 'es2015', 'react' ]
});
require("babel-core").transform("code", {
  plugins: ["transform-object-assign"]
});
module.exports = require('./server.js');
