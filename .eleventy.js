export default function (eleventyConfig) {
  // Copy CSS and images to the output folder
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("images");

  // Tell Eleventy to read from src and output to _site
  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
  };
}
