module.exports = function (grunt) {

  // Load the plugins that provide the tasks
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options: {
          style: 'compact',
          cacheLocation: '/.sass-cache'
        },
        files: {
          'css/custom.css' : 'css/custom.sass'
        }
      }
    },

    jade: {
      compile: {
        options: {
          pretty: true
        },
        files: {
          "index.html": "index.jade"
        }
      }
    },

    watch: {
      options: {
        livereload: 3000
      },
      jade: {
        files: 'index.jade',
        tasks: ['jade']
      },
      sass: {
        files: 'css/*.sass',
        tasks: ['sass']
      },
      html: {
            files: ['index.html','css/*.css'],
            options: {
                livereload: true
            }
        }
    },
    
  });

  grunt.registerTask('default', ['sass', 'jade', 'watch']);
  grunt.registerTask('changes', ['watch']);
  
  /*grunt.registerTask('watch', 'My "watch" task description.', function() {
    grunt.log.writeln('Currently running the "watch" task.');
  });*/
};