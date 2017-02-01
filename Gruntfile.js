module.exports = function(grunt) {

	grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

		paths: {
            src: {
                js: 'components/scripts/',
                scss: 'components/sass/'
            },
            dest: {
                js: 'builds/development/wp-content/themes/sac/js/',
                css: 'builds/development/wp-content/themes/sac/css/',
            }
        },

		concat: {
			options: {
				separator: '\n\n//-------------------------------------------------------\n'
			},
			main : {
				src: [
					'<%= paths.src.js %>inc/navigation.js',
					'<%= paths.src.js %>inc/skip-link-focus-fix.js',
					'<%= paths.src.js %>inc/jquery.smoothState.min.js',
					'bower_components/object-fit/dist/polyfill.object-fit.min.js',
					'bower_components/gsap/src/minified/TweenMax.min.js',
					'bower_components/scrollmagic/scrollmagic/minified/ScrollMagic.min.js',
					'bower_components/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js',
					'bower_components/scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js',
					'<%= paths.src.js %>main.js'
					],
				dest: '<%= paths.dest.js %>sac.main.js'
			},
			home: {
				src: [
					'<%= paths.src.js %>inc/owl.carousel.min.js',
					'bower_components/jquery-animateNumber/jquery.animateNumber.min.js',
					'<%= paths.src.js %>home.js'
				],
				dest: '<%= paths.dest.js %>sac.home.js'
			}
		}, // concat

    uglify: {
      main: {
				options: {
	        // the banner is inserted at the top of the output
	        banner: '/*! <%= pkg.name %> v<%= pkg.version %> <%= grunt.template.today("mm/dd/yyyy") %> */\n'
	      },
        files: {
          '<%= paths.dest.js %>sac.main.min.js': ['<%= paths.dest.js %>sac.main.js']
        }
      },
      home: {
				options: {
	        // the banner is inserted at the top of the output
	        banner: '/*! <%= pkg.name %> - Home Page Scripts - v<%= pkg.version %> <%= grunt.template.today("mm/dd/yyyy") %> */\n'
	      },
        files: {
          '<%= paths.dest.js %>sac.home.min.js': ['<%= paths.dest.js %>sac.home.js']
        }
      }
    },

		sass: {
			// Sass development options
			dev: {
				options: {
					outputStyle: 'expanded',
					includePaths: [
						'bower_components/breakpoint-sass/stylesheets',
						'bower_components/font-awesome/scss',
						'bower_components/object-fit/dist'
					]
				},
				files: [{
					src: '<%= paths.src.scss %>style.scss',
					dest: '<%= paths.dest.css %>main.css'
				}]
			},

			// Sass distribution options
			dist: {
				options: {
					outputStyle: 'compressed',
					includePaths: ['bower_components/breakpoint-sass/stylesheets', 'bower_components/font-awesome/scss']
				},
				files: [{
					src: '<%= paths.src.scss %>style.scss',
					dest: '<%= paths.dest.css %>main.min.css'
				}]
			}
		}, // sass

		autoprefixer: {
		    options: {
		    	browsers: ['last 2 versions', 'ie 9', 'ie 10', 'ie 11', '> 0%' ]
		    },
		    dev: {
		    	files:{ '<%= paths.dest.css %>main.css':'<%= paths.dest.css %>main.css' }
		    },
		    dist: {
		    	files:{ '<%= paths.dest.css %>main.min.css':'<%= paths.dest.css %>main.min.css' }
		    }
		 }, //autoprefixer


		watch: {
			options: {
				spawn: false,
				livereload: true
			},
			scripts: {
				files: ['builds/development/wp-content/themes/sac/**/*.php','<%= paths.src.js %>**/*.js','<%= paths.src.scss %>**/*.scss'],
				tasks: ['concat', 'uglify', 'sass', 'autoprefixer']
			}
		}

	}); //initConfig

	grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-sass');

	grunt.registerTask('default',['concat','uglify','sass','autoprefixer','watch']);

}; //wrapper function
