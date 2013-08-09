module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // NodeJS project meta
    pkg: grunt.file.readJSON('package.json'),
    

    // LESS config
    less: {

      // Development
      dev: {
        options: {
          paths: ["assets/css"]
        },
        files: {
          "path/to/result.css": "path/to/source.less"
        }
      },

      // Production
      pro: {
        options: {
          paths: ["assets/css"],
          yuicompress: true
        },
        files: {
          "path/to/result.css": "path/to/source.less"
        }
      }
    },


    // CoffeeScript config
    coffee: {

      // Development
      dev: {
        options: {
          join: true
        },
        files: {
          'path/to/result.js': 'path/to/source.coffee', // 1:1 compile, identical output to join = false
          'path/to/another.js': ['path/to/sources/*.coffee', 'path/to/more/*.coffee'] // concat then compile into single file
        }
      },

      // Production
      pro: {
        options: {
          join: true
        },
        files: {
          'path/to/result.js': 'path/to/source.coffee', // 1:1 compile, identical output to join = false
          'path/to/another.js': ['path/to/sources/*.coffee', 'path/to/more/*.coffee'] // concat then compile into single file
        }
      }
    },


    // Copy config
    copy: {
      dev: {
        files: [
          {expand: true, src: ['path/*'], dest: 'dest/', filter: 'isFile'}, // includes files in path
          {expand: true, src: ['path/**'], dest: 'dest/'}, // includes files in path and its subdirs
          {expand: true, cwd: 'path/', src: ['**'], dest: 'dest/'}, // makes all src relative to cwd
          {expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile'} // flattens results to a single level
        ]
      }
    }
      
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-coffee');

  grunt.registerTask('default', ['less', 'coffee']);

};