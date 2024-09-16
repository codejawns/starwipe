/**
 * npm scripts in the `package.json` file are all well and good, but sometimes
 * they can get cumbersome. Using a resource like nps (npm package scripts) can
 * help to keep things neat and tidy, making script more readable.
 */
module.exports = {
  scripts: {
    // Scripts for building the accessible color palette.
    color: {
      // There can be multiple scripts here, one for each color palette there
      // may be! Some presentations (or all of them) may use one palette while
      // others use a different one. The one listed here is for the main, base
      // palette, and others here for example -- or to use!
      base: 'mkdir -p ./source/_scss/global/colors/base && npx a11y-color-tokens --colorTokensPath=./source/_scss/global/colors/base/tokens.js --outputDirPath=./source/_scss/global/colors/base --outputFilename=_tokens.scss --sassOutputName=base --no-tokenPrefix --no-includeCustomProperties --compatibilityDocsPath=./source/_scss/global/colors/base --compatibilityDocsTitle="Base Palette Color Contrast"',

      // Add a light color palette.
      light: 'mkdir -p ./source/_scss/global/colors/light && npx a11y-color-tokens --colorTokensPath=./source/_scss/global/colors/light/tokens.js --outputDirPath=./source/_scss/global/colors/light --outputFilename=_tokens.scss --sassOutputName=light --no-tokenPrefix --no-includeCustomProperties --compatibilityDocsPath=./source/_scss/global/colors/light --compatibilityDocsTitle="Light Palette Color Contrast"',

      // Add a dark color palette.
      dark: 'mkdir -p ./source/_scss/global/colors/dark && npx a11y-color-tokens --colorTokensPath=./source/_scss/global/colors/dark/tokens.js --outputDirPath=./source/_scss/global/colors/dark --outputFilename=_tokens.scss --sassOutputName=dark --no-tokenPrefix --no-includeCustomProperties --compatibilityDocsPath=./source/_scss/global/colors/dark --compatibilityDocsTitle="Dark Palette Color Contrast"',

      // Build all the accessible color palettes.
      build: 'nps color.base color.light color.dark',

      // The watch script will watch _any_ list of color tokens, and build the
      // generated list(s).
      watch: 'onchange "./source/_scss/global/colors/**/tokens.js -- nps color.build"'
    },

     // Scripts for building CSS files.
    css: {
      build: 'sass --load-path=./source/_scss --load-path=./node_modules/reveal.js/css --style=compressed --no-source-map ./source/_scss:./site/_assets/css',
      watch: 'sass --watch --load-path=./source/_scss --load-path=./node_modules/reveal.js/css ./source/_scss:./site/_assets/css'
    },

    // Scripts for the static site.
    site: {
      build: 'npx @11ty/eleventy --quiet',
      watch: 'npx @11ty/eleventy --serve --quiet'
    }
  }
}
