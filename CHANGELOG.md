## v0.2.0
* updated dependencies to last versions
* removed obsolete dependencies
* general clean up

## v0.1.2
* added readme file
* added rudimentary tests
* updated `xmlbuilder` to version 4.0.0
* removed obsolete `fileName` variable

## v0.1.1
* replaced varibale `root` with `siteRoot` since first one turns out to be a global object
* changelog converted to markdown

## v0.1.0
* replaced `grunt.template.today()` with `moment()` to fit `W3C Datetime` standart
* allow to set custom time format #note: see [moment.js](http://momentjs.com/)
* [js-standard-style](https://github.com/feross/standard)
* code rewrited in ES6 and requres node v4.0.0 or higher
* general improvements to gruntfile (coffee, jit-grunt)
* upgraded `xmlbuilder` to 3.1.0
* new `pretty` option #note: false by default
