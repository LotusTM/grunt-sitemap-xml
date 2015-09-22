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
    let sitemap, root, url, message

    const options = this.options({
      siteRoot: pkg.homepage,
      stripIndex: true,
      fileName: 'sitemap',
      lastMod: moment().format('YYYY-MM-DDTHH:mm:ssZ'),
      priority: '0.5',
      changeFreq: 'weekly',
      pretty: false
    })

    // Resolve options.siteRoot, add '/' if needed
    if (options.siteRoot) {
      root = (options.siteRoot.slice(-1) === '/') ? options.siteRoot : options.siteRoot + '/'
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
      file.src.forEach(filepath => {
        // Strip index.html
        filepath = (options.stripIndex) ? filepath.replace('index.html', '') : filepath

        // Create XML node for each entry
        url = urlset.ele('url')

        url.ele('loc', root + filepath)
        url.ele('lastmod', options.lastMod)
        url.ele('changefreq', options.changeFreq)
        url.ele('priority', options.priority)

        // for debug purpose
        message = `loc: ${root + filepath}\nlastmod: ${options.lastMod}\nchangefreq: ${options.changeFreq}\npriority: ${options.priority}\n`
        grunt.verbose.writeln(message)
      })

      // Format XML sitemap
      sitemap = urlset.end({
        pretty: options.pretty
      })

      // Write the destination file.
      grunt.file.write(file.dest, sitemap)
      // Print a success message.
      grunt.log.writeln(`File ${chalk.cyan(file.dest)} created.`)
    })
  })
}
