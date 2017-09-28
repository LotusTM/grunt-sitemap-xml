module.exports = (grunt) => {
  'use strict'

  // Track execution time
  require('time-grunt')(grunt)

  // Load grunt tasks automatically
  require('jit-grunt')(grunt)

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    path: {
      temp: 'temp',
      test: 'tests',
      fixtures: '<%= path.test %>/fixtures',
      defaultOptionsMap: '<%= path.temp %>/sitemap.xml',
      customOptionsMap: '<%= path.temp %>/custommap.xml',
      noTrailingSlashMap: '<%= path.temp %>/notrailingslash.xml'
    },

    clean: {
      test:
        '<%= path.temp %>'
    },

    sitemap_xml: {
      default_options: {
        options: {
          lastMod: new Date('2017-09-28').toISOString()
        },
        files: [{
          cwd: '<%= path.fixtures %>',
          src: '{,**/}*.html',
          dest: '<%= path.defaultOptionsMap %>'
        }]
      },
      custom_options: {
        options: {
          siteRoot: 'true',
          stripIndex: false,
          lastMod: new Date('2017-09-28').toISOString(),
          priority: '0.1',
          changeFreq: 'monthly',
          pretty: true
        },
        files: [{
          cwd: '<%= path.fixtures %>',
          src: '{,**/}*.{html,htm}',
          dest: '<%= path.customOptionsMap %>'
        }]
      },
      no_trailing_slash: {
        options: {
          lastMod: new Date('2017-09-28').toISOString(),
          trailingSlash: false,
          pretty: true
        },
        files: [{
          cwd: '<%= path.fixtures %>',
          src: '{,**/}*.html',
          dest: '<%= path.noTrailingSlashMap %>'
        }]
      }
    }
  })

  grunt.loadTasks('tasks')

  grunt.registerTask('test', [
    'clean',
    'sitemap_xml'
  ])

  return grunt
}
