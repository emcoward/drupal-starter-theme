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
      cwd: '<%= paths.src %>/<%= paths.img %>',
      src: '**/*',
      dest: '<%= paths.assets %>/<%= paths.img %>'
    }]
  }
}
