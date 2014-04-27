'use strict';

// Lints css files

module.exports = {
  options: {
    csslintrc: '<%= paths.rc %>/.csslintrc',
    formatters: [
      {
        id: 'text',
        dest: '<%= paths.tmp %>/csslint-report.txt'
      }
    ]
  },
  strict: {
    options: {
      import: 2
    },
    src: [
      '<%= paths.assets %>/<%= paths.css %>/styles.css'
    ]
  }
}
