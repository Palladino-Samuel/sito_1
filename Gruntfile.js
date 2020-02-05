module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        /*files: {
          "less/*.css": ["less/*.less"] // destination file and source file
        }*/
        files: [{
          expand: true,
          cwd: '',
          src: ['less/*.less'],
          dest: '',
          ext: '.min.css',
          extDot: 'last'
        }]
      }
    },
    watch: {
      styles: {
        files: ['less/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.registerTask('default', ['less', 'watch']);
};
