const { execSync } = require("child_process");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/img');
  eleventyConfig.addPassthroughCopy('src/admin/config.yml', 'admin/config.yml');
  eleventyConfig.setServerOptions({
    watch: ['./public/css/styles.css']
  });

  return {
    htmlTemplateEngine: "njk",
    dir: {
      input: 'src',
      output: 'public'
    }
  }
}