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

    svg_sprite: {
			generate: {
				cwd: 'web/assets/vendor/material-design-icons',
				src: [
					// 'content/svg/production/ic_add_24px.svg',
					'../../../../public/assets/img/ic_dots_24px.svg',
					'../../../../public/assets/img/ic_logo_24px.svg',
					'../../../../public/assets/img/ic_menu_24px.svg',
					'../../../../public/assets/img/ic_notification_24px.svg',

				],
				dest: 'src/sprites',

				options: {
					shape: {
						id: {
							generator: function(filename) {
								var id = filename.match(/ic_(\w+)_\d+/);
								return id[1];
							}
						},
					},
					mode: {
						symbol: {
							dest: ''
						}
					}
				}
			}
		}
    

  });

  [
    'grunt-contrib-compass',
    'grunt-contrib-watch',
    'grunt-svg-sprite'
  ].forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['compass']);
};