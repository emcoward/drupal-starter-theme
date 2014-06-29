'use strict';

// Lints JS files

module.exports = {
  options: {
    jshintrc: '<%= paths.rc %>/.jshintrc',
    "force": true
  },
  all: [
    '<%= paths.src %>/<%= paths.js %>/**/*.js'
  ]
}
