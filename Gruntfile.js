module.exports = function (grunt) {
  'use strict';
  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Project settings
  var options = {
    paths: {
      // Configurable paths
      'src': 'src',
      'js': 'js',
      'img': 'img',
      'css': 'css',
      'scss': 'scss',
      'tmp': 'tmp',
      'rc': 'rc',
      'assets': 'assets'
    }
  };

  // Load grunt configurations automatically
  var configs = require('load-grunt-configs')(grunt, options);

  // Define the configuration for all the tasks
  grunt.initConfig(configs);

  // register default task
  grunt.registerTask('default', ['watch']);

  // build tasks
  grunt.registerTask('build', [
    'clean',
    'copy',
    'sass:dev',
    'csslint',
    'jshint'
  ]);

  // production task
  grunt.registerTask('production', [
    'clean',
    'imagemin',
    'copy',
    'sass:dist'
  ]);

};

