'use strict';

// Lints JS files

module.exports = {
  options: {
    jshintrc: '.jshintrc',
    "force": true
  },
  all: [
    'scripts/*.js',
    'scripts/**/**/*.js',
  ]
}
