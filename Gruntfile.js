module.exports = function(grunt) {

	var jsfiles = {
		'js/main.min.js': [
            '_js/offcanvas.js',
        ]
	};

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

        compass: {
            dist: {
                options: {
                    cssDir: "css",
                    imagesDir: "img",
                    javascriptsDir: 'js',
                    outputStyle: 'compressed',
                    sassDir: "_scss",
                }
            }
        },

		uglify: {
			dist: {
				options: {
					compress: true,
					mangle: true,
					sourceMap: false,
				},
				files: jsfiles
			}
		},

		watch: {
			scripts: {
				files: ['_js/**/*.js'],
				tasks: ['uglify:dist'],
				options: {
					spawn: false,
					livereload: true,
				}
			},
			css: {
				files: '_scss/**/*.scss',
				tasks: ['compass:dist'],
				options: {
					livereload: true,
				}
			}
		},
	});

    require('load-grunt-tasks')(grunt);

	grunt.registerTask('default', ['uglify:dist', 'compass:dist', 'watch']);
};
