// Karma configuration
// Generated on Sun Sep 08 2013 13:41:32 GMT+0100 (BST)

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [
        'http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js',
        'src/*.js',
        'tests/*.js'
    ],
    exclude: [
        'src/*.min.js'
    ],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    captureTimeout: 60000,
    singleRun: true
  });
};
