module.exports = function (grunt) {
    grunt.initConfig({
      compass: {                  // Task
        dist: {                   // Target
          options: {              // Target options
            sassDir: 'src/assets/style',
            cssDir: 'assets/style',
            environment: 'production'
          }
        },
      },
      watch: {
        options: {
          livereload: true,
        },
        css: {
          files: ['src/assets/style/*.scss'],
          tasks: ['compass'],
        },
      },
      browserSync: {
        dev: {
          bsFiles: {
            src: [
              'css/*.css',
              './*.html'
            ]
          },
          options: {
            watchTask: true,
            server: './'
          }
        }
      }
    });
  
    // [
    //   'grunt-contrib-compass',
    //   'grunt-browser-sync',
    //   'grunt-contrib-watch'
    // ].forEach(grunt.loadNpmTasks);
  
    grunt.loadNpmTasks('grunt-contrib-compass'),
    grunt.loadNpmTasks('grunt-browser-sync'),
    grunt.loadNpmTasks('grunt-contrib-watch');
  
    grunt.registerTask('default', ['browserSync', 'watch']);
  
  };