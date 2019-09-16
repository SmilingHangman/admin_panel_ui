module.exports = function(grunt) {
  grunt.initConfig({
    compass: {                  // Task
      dist: {                   // Target
        options: {              // Target options
          sassDir: 'src/assets/style',
          cssDir: 'public/assets/style',
          environment: 'production'
        }
      },
    },
    watch: {
      css: {
        files: ['src/assets/style/*.scss'],
        tasks: ['compass'],
        options: {
          livereload: true,
        },
      },
    },
  });

  [
    'grunt-contrib-compass',
    'grunt-contrib-watch'
  ].forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['compass']);
};