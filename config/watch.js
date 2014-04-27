'use strict';

// Watches for changes to files and triggers tasks

module.exports = {
  gruntfile: {
    files: [
      'Gruntfile.js'
    ]
  },
  images: {
    files: '<%= paths.src %>/<%= paths.img %>/*',
    tasks: [
      'clean:img',
      'copy:img'
    ]
  },
  scss: {
    files: [
      '<%= paths.src %>/<%= paths.scss %>/**/*.{scss,sass}',
      '<%= paths.src %>/<%= paths.scss %>/*.{scss,sass}'
    ],
    tasks: [
      'clean:css',
      'sass:dev'
    ]
  },
  js: {
    files: [
      '<%= paths.src %>/<%= paths.js %>/**/*.js'
    ],
    tasks: [
      'jshint'
    ]
  }
}
