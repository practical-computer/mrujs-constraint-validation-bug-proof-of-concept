import esbuild from "esbuild";

export default function(eleventyConfig) {
  eleventyConfig.addWatchTarget("./index.js");
  eleventyConfig.setServerOptions({
    domDiff: false
  })

  eleventyConfig.on(`eleventy.before`, async() => {
    await esbuild.build({
      entryPoints: ["index.js"],
      bundle: true,
      outfile: "_site/bundle.js",
      sourcemap: false,
    })
  })
};