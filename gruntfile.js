module.exports = function(grunt) {
  grunt.initConfig({
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files 'destination': 'source'
          'public/assets/css/main.css': 'stylesheets/main.scss'
        }
      }
    },

    copy: {
      main: {
        files: [
          {expand: true, src: ['javascripts/**'], dest: 'library/assets/'}
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['sass', 'copy']);
};
