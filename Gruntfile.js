module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({
    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    },
    jshint: {
    	all: ['tests/*.js'],
    	options: {
    		"-W099": true,
		    globals: {
		    	jQuery: true
		    },
	    }
  	},
  	uglify: {
	    my_target: {
		    files: {
		        'src/select-placeholder.min.js': ['src/select-placeholder.js']
		    }
	    }
	}
  });

  grunt.registerTask('default', ['jshint', 'karma', 'uglify']);
};