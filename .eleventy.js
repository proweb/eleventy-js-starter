
const { minify } = require('html-minifier-terser');

module.exports = function (eleventyConfig) {


	// Transform example
	// @url: https://www.11ty.dev/docs/config/#transforms
  eleventyConfig.addTransform("logger", async function (content) {
   
    // Eleventy 2.0+ has full access to Eleventy’s `page` variable
    console.log(`source file: ${this.page.inputPath}`);
    console.log(`output file: ${this.page.outputPath}`);

    return content; // no change done.
  });

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
