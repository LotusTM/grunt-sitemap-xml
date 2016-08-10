# grunt-sitemap-xml

[![dependencies status](https://img.shields.io/david/LotusTM/grunt-sitemap-xml.svg?style=flat)](https://david-dm.org/LotusTM/grunt-sitemap-xml#info=dependencies)

> Grunt task for generating sitemap.xml

## Getting Started
This plugin requires Grunt `~0.4.5` and node.js `4.0.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-sitemap-xml --save
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-sitemap-xml');
```

## The "sitemap_xml" task

### Overview
In your project's Gruntfile, add a section named `sitemap_xml` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  sitemap_xml: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.siteRoot
Type: `String`
Default value: `pkg.homepage`

A string value that is used to define the site root of the URL. Defaults to homepage from package.json.

#### options.stripIndex
Type: `Boolean`
Default value: `true`

A boolean value that is used to determine whether to strip index.html from the URL.

#### options.lastMod
Type: `String`
Default value: `moment().format('YYYY-MM-DDTHH:mm:ssZ')`

The date of last modification of the file. This date should be in [W3C Datetime](http://www.w3.org/TR/NOTE-datetime) format.

#### options.priority
Type: `String`
Default value: `0.5`

The priority of this URL relative to other URLs on your site. Valid values range from 0.0 to 1.0.

#### options.changeFreq
Type: `String`
Default value: `weekly`

How frequently the page is likely to change. This value provides general information to search engines and may not correlate exactly to how often they crawl the page. Valid values are:

 - always
 - hourly
 - daily
 - weekly
 - monthly
 - yearly
 - never

#### options.pretty
Type: `Boolean`
Default value: `false`

A boolean value that is used to determine whether print the results indented with spaces

### Usage Example

```js
grunt.initConfig({
  sitemap_xml: {
      files: [
        {
          cwd: 'app/build',
          src: '{,**/}*.html',
          dest: 'app/build/sitemap.xml'
        }
      ]
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
see [CHANGELOG.md](CHANGELOG.md)
