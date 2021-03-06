'use strict';

module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Project settings
  var options = {
      bower: grunt.file.readJSON('.bowerrc'),
      pkg: grunt.file.readJSON('package.json')
  };

  // Load grunt configurations automatically
  var configs = require('load-grunt-configs')(grunt, options);

  // Define the configuration for all the tasks
  grunt.initConfig(configs);

  // register default task
  grunt.registerTask('default', ['watch']);

  // build tasks
  grunt.registerTask('dev', [
    'clean',
    'imagemin',
    'compass',
    'csslint',
    'jshint'
  ]);
};

