'use strict';

// Copies files

module.exports = {
  img: {
    files: [{
        expand: true,
        cwd: '<%= paths.src %>/<%= paths.img %>',
        src: '**',
        dest: '<%= paths.assets %>/<%= paths.img %>'
    }]
  },
  js: {
      expand: true,
      cwd: '<%= paths.src %>/<%= paths.js %>',
      src: '**',
      dest: '<%= paths.assets %>/<%= paths.js %>'
  }
}
