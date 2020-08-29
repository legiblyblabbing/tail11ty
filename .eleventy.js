const embedYouTube = require("eleventy-plugin-youtube-embed");
module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPlugin(embedYouTube);
};