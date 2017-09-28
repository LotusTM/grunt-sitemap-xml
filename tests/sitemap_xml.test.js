/* eslint-env jest */

const { runGrunt, grunt } = require('./utils/grunt')
const { config, file: { read } } = grunt

describe('sitemap_xml task', () => {
  beforeAll(() => runGrunt(['test']))

  describe('with default settings', () => {
    it('should produce correct xml file', () => {
      expect(read(config('path.defaultOptionsMap'))).toMatchSnapshot()
    })
  })

  describe('with custom settings', () => {
    it('should produce correct xml file', () => {
      expect(read(config('path.customOptionsMap'))).toMatchSnapshot()
    })
  })
})
