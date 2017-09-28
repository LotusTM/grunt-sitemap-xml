# Changelog

## HEAD
- `package.json` cleanups.
- Added `package.json` `main` property pointing to the task file.
- Added `snazzy` for better `standard` output.
- Updated `.editorconfig` to be in peace with `standard` final newline rule requirement.
- `gruntfile` is no longer written in CoffeeScript :pensive:

## 0.2.1
- Updated dependencies to last versions

## 0.2.0
- Updated dependencies to last versions
- Removed obsolete dependencies
- General clean up

## 0.1.2
- Added readme file
- Added rudimentary tests
- Updated `xmlbuilder` to version 4.0.0
- Removed obsolete `fileName` variable

## 0.1.1
- Replaced varibale `root` with `siteRoot` since first one turns out to be a global object
- Changelog converted to markdown

## 0.1.0
- Replaced `grunt.template.today()` with `moment()` to fit `W3C Datetime` standart
- Allow to set custom time format #note: see [moment.js](http://momentjs.com/)
- [js-standard-style](https://github.com/feross/standard)
- Code rewrited in ES6 and requres node v4.0.0 or higher
- General improvements to gruntfile (coffee, jit-grunt)
- Upgraded `xmlbuilder` to 3.1.0
- New `pretty` option #note: false by default
