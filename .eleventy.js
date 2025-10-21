// ABOUTME: Eleventy configuration for the Hitchens theme.
// ABOUTME: Configures directories, markdown processing, collections, and filters.

const { DateTime } = require("luxon");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function(eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(pluginRss);

  // Passthrough copy for static assets
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("favicon.ico");

  // Watch for Sass changes
  eleventyConfig.addWatchTarget("./_sass/");

  // Collections
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("_posts/*.md").reverse();
  });

  // Filters
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("LLLL d, yyyy");
  });

  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  eleventyConfig.addFilter("date", (dateObj, format) => {
    const dt = DateTime.fromJSDate(dateObj, { zone: "utc" });
    if (format === "%b %-d, '%y") {
      return dt.toFormat("LLL d, ''yy");
    }
    return dt.toFormat(format);
  });

  eleventyConfig.addFilter("excerpt", (content, length = 140) => {
    if (!content) return "";
    const stripped = content.replace(/<[^>]+>/g, "");
    if (stripped.length <= length) return stripped;
    return stripped.substring(0, length).trim() + "...";
  });

  eleventyConfig.addFilter("truncateWords", (content, numWords = 20) => {
    if (!content) return "";
    const stripped = content.replace(/<[^>]+>/g, "");
    const words = stripped.split(/\s+/);
    if (words.length <= numWords) return stripped;
    return words.slice(0, numWords).join(" ") + "...";
  });

  eleventyConfig.addFilter("head", (array, n) => {
    if (n < 0) {
      return array.slice(n);
    }
    return array.slice(0, n);
  });

  // Customize Markdown library
  const markdownLibrary = markdownIt({
    html: true,
    breaks: false,
    linkify: true
  }).use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.ariaHidden({
      placement: "after",
      class: "anchor-link",
      symbol: "#",
      level: [1, 2, 3, 4],
    }),
    slugify: eleventyConfig.getFilter("slugify")
  });

  eleventyConfig.setLibrary("md", markdownLibrary);

  // Pagination
  eleventyConfig.addFilter("paginate", function(collection, size = 3) {
    const pages = [];
    for (let i = 0; i < collection.length; i += size) {
      pages.push(collection.slice(i, i + size));
    }
    return pages;
  });

  // Ignore Jekyll-specific files
  eleventyConfig.ignores.add("Gemfile");
  eleventyConfig.ignores.add("Gemfile.lock");
  eleventyConfig.ignores.add("hitchens-theme.gemspec");
  eleventyConfig.ignores.add("LICENSE.txt");
  eleventyConfig.ignores.add("screenshot.png");
  eleventyConfig.ignores.add("vendor/**");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
      output: "_site"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
