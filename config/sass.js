'use strict';

// Compiles SCSS to CSS

module.exports = {
  dev: {
    options: {
      lineNumbers: true,
      style: 'expanded',
      debugInfo: true
    },
    files: {
      '<%= paths.assets %>/<%= paths.css %>/styles.css': '<%= paths.src %>/<%= paths.scss %>/styles.scss',
      '<%= paths.assets %>/<%= paths.css %>/print.css': '<%= paths.src %>/<%= paths.scss %>/print.scss'
    }
  },
  dist: {
    options: {
      style: 'expanded'
    },
    files: {
      '<%= paths.assets %>/<%= paths.css %>/styles.css': '<%= paths.src %>/<%= paths.scss %>/styles.scss',
      '<%= paths.assets %>/<%= paths.css %>/print.css': '<%= paths.src %>/<%= paths.scss %>/print.scss'
    }
  }
}
