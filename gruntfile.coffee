module.exports = (grunt) ->
  'use strict'

  # Track execution time
  require('time-grunt') grunt

  # Load grunt tasks automatically
  require('jit-grunt') grunt

  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'

    path:
      temp: 'temp'
      test: 'test'
      fixtures: '<%= path.test %>/fixtures'

    clean:
      test:
        '<%= path.temp %>'

    sitemap_xml:
      default_options:
        files: [
          cwd: '<%= path.fixtures %>'
          src: '{,**/}*.html'
          dest: '<%= path.temp %>/sitemap.xml'
        ]
      custom_options:
        options:
          siteRoot: 'true',
          stripIndex: false,
          lastMod: grunt.template.today('yyyy-mm-dd'),
          priority: '0.1',
          changeFreq: 'monthly'
          pretty: true
        files: [
          cwd: '<%= path.fixtures %>'
          src: '{,**/}*.{html,htm}'
          dest: '<%= path.temp %>/map.xml'
        ]

  grunt.loadTasks 'tasks'

  ###
  A task for scss and js linting
  ###
  grunt.registerTask 'test', [
    'clean'
    'sitemap_xml'
  ]

  return
