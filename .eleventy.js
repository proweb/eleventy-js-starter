
const { minify } = require('html-minifier-terser');

module.exports = function (eleventyConfig) {
 

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
    },
  };
};
