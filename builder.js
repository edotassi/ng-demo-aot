var path = require("path");
var Builder = require('systemjs-builder');

// optional constructor options
// sets the baseURL and loads the configuration file
var builder = new Builder({
    baseUrl: "./build"
});
builder.loadConfig("./systemjs.config.js");

builder
    .buildStatic('build/main.js', 'dist/outfile.js')
    .then(function () {
        console.log('Build complete');
    })
    .catch(function (err) {
        console.log('Build error');
        console.log(err);
    });