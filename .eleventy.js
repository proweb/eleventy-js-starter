
const { minify } = require('html-minifier-terser');

/**
 *  @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 */

module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy({"public": "/"});

  // Shortcodes
  eleventyConfig.addShortcode("year", () => new Date().getFullYear());

  // Transforms : Minify HTML Output
  eleventyConfig.addTransform("htmlmin", function(content) {
    // Prior to Eleventy 2.0: use this.outputPath instead
    if( this.page.outputPath && this.page.outputPath.endsWith(".html") ) {
      let minified = minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }

	return content;
	});

  return {
    dir: {
      input: "src",
      output: "dist"
    },
    prefix: "/"
  };
};
