
var gulp = require("gulp");

var modules = [
    'librebank-core',
    'librebank-paypalrest'
    // 'librebank-monzo',
    // 'librebank-starling'
];

var scripts = [];
for (var i in modules) {
    var module = modules[i]

    scripts.push(module+'/gulpfile.js');
}

var hub = require('gulp-hub');
hub(scripts);