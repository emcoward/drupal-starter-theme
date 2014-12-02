'use strict';

// Image optimization

module.exports = {
  dist: {
    options: {
      optimizationLevel: 7,
      progressive: true
    },
    files: [{
      expand: true,
      cwd: 'images',
      src: '**/*',
      dest: 'images'
    }]
  }
}
