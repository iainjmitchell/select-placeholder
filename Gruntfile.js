module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-jshint');

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
  	}
  });

  grunt.registerTask('default', ['jshint', 'karma']);
};