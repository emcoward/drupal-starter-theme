'use strict';

// Watches for changes to files and triggers tasks

module.exports = {
  gruntfile: {
    files: [
      'Gruntfile.js'
    ]
  },
  scss: {
    files: [
      'sass/**/*.{scss,sass}',
      'sass/*.{scss,sass}'
    ],
    tasks: [
      'clean:css',
      'compass',
      'csslint'
    ]
  },
  js: {
    files: [
      'scripts/*.js',
      'scripts/**/*.js'
    ],
    tasks: [
      'jshint'
    ]
  }
}
