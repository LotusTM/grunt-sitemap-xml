/*
 * grunt-sitemap-xml
 * https://github.com/LotusTM/grunt-sitemap-xml
 *
 * Copyright (c) 2015 LotusTM
 * Licensed under the MIT license.
 */
'use strict'

const chalk = require('chalk')
const moment = require('moment')
const builder = require('xmlbuilder')

module.exports = function (grunt) {
  // Read package.json
  const pkg = this.config.data.pkg || grunt.file.readJSON('package.json')

  grunt.registerMultiTask('sitemap_xml', 'Grunt task for generating sitemap.xml for search engine indexing', function () {
    let siteRoot

    const options = this.options({
      siteRoot: pkg.homepage,
      stripIndex: true,
      lastMod: moment().format('YYYY-MM-DDTHH:mm:ssZ'),
      priority: '0.5',
      changeFreq: 'weekly',
      pretty: false
    })

    // Resolve options.siteRoot, add '/' if needed
    if (options.siteRoot) {
      siteRoot = (options.siteRoot.slice(-1) === '/') ? options.siteRoot : options.siteRoot + '/'
    } else {
      grunt.fail.warn('Please set siteRoot variable in options or homepage property in package.json.')
    }

    // Build XML string
    let urlset = builder.create('urlset', {
      version: '1.0',
      encoding: 'UTF-8'
    })

    urlset.att('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9')
      .att('xmlns:xsi', 'http://www.w3.org/2001/XMLSchema-instance')
      .att('xsi:schemaLocation', 'http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd')

    // Iterate over all specified file groups
    this.files.forEach(file => {
      let sitemap
      let url
      let message
      let count = 0

      file.src.forEach(filepath => {
        // Strip index.html
        filepath = (options.stripIndex) ? filepath.replace('index.html', '') : filepath

        // Create XML node for each entry
        url = urlset.ele('url')

        url.ele('loc', siteRoot + filepath)
        url.ele('lastmod', options.lastMod)
        url.ele('changefreq', options.changeFreq)
        url.ele('priority', options.priority)

        // for debug purpose
        message = `loc: ${siteRoot + filepath}\nlastmod: ${options.lastMod}\nchangefreq: ${options.changeFreq}\npriority: ${options.priority}\n`
        grunt.verbose.writeln(message)
        count++
      })

      // Format XML sitemap
      sitemap = urlset.end({
        pretty: options.pretty
      })

      // Write the destination file.
      grunt.file.write(file.dest, sitemap)

      // for debug purpose
      message = `${count} ${grunt.util.pluralize(count, 'file/files')} were added to sitemap.`
      grunt.verbose.writeln(message)

      // Print a success message.
      grunt.log.writeln(`File ${chalk.cyan(file.dest)} created.`)
    })
  })
}
