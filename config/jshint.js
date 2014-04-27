'use strict';

// Lints JS files

module.exports = {
  options: {
    jshintrc: '<%= paths.rc %>/.jshintrc',
    "force": true
  },
  all: [
    'Gruntfile.js',
    '<%= paths.src %>/<%= paths.js %>/**/*.js'
  ]
}
