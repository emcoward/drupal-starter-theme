'use strict';

// Checks JavaScript code style with jscs

module.exports = {
    options: {
        config: '.jscsrc'
    },
    files: {
        expand: true,
        cwd: 'scripts',
        src: [
            'Gruntfile.js',
            '/*.js',
            '**/**/*.js'
        ]
    }
};
