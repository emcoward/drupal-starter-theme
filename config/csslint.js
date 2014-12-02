'use strict';

// Lints css files

module.exports = {
  options: {
    csslintrc: '.csslintrc',
    formatters: [
      {
        id: 'text',
        dest: 'tmp/csslint-report.txt'
      }
    ]
  },
  strict: {
    options: {
      import: 2
    },
    src: [
      'stylesheets/styles.css'
    ]
  }
}
