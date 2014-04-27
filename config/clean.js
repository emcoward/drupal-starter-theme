'use strict';

// Empties folders to start fresh

module.exports = {
  img: {
    src: [
      '<%= paths.assets %>/<%= paths.img %>'
    ]
  },
  css: {
    src: [
      '<%= paths.assets %>/<%= paths.css %>/styles.css',
      '<%= paths.assets %>/<%= paths.css %>/print.css'
    ]
  },
  js: {
    src: [
      '<%= paths.assets %>/<%= paths.js %>'
    ]
  }
};
