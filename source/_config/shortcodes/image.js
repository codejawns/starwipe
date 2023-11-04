// Import 11ty image plugin.
const path = require("path");
const Image = require( "@11ty/eleventy-img" );

// Configure the image plugin.

module.exports = async function( src, alt, link ) {
  // Throw a build error if the image has no alt text provided. If the image is
  // purely decorative, empty alt "" is allowed.
  if(alt === undefined) {
    throw new Error(`Missing \`alt\` on: ${src}`);
  }

  // The input path always ends with `/index.njk` as the presentation's
  // filename. We can slice this off to get the proper path for the image's
  // directory.
  let inputDirectory = this.page.inputPath.slice(0, -10);
  
  // Create the source path of the image by joining the updated input
  // directory with the filename of the image itself.
  let imageSrc = `${inputDirectory}/images/${src}`;

  // Images have an output directory based on which presentation they are
  // associated with, so that the images live within the same directory as their
  // files, for easy finding. The output path always ends with `index.html` as
  // the presentation filename. We can slice that off to get the proper path
  // for the generated image's directory.
  const outputDirectory = this.page.outputPath.slice(0, -10);

  // Set the metadata for this image, that 11ty will generate.
  const metadata = await Image(imageSrc, {
    widths: [300, 600, 900, 1200],
    formats: ['auto'],
    outputDir: `${outputDirectory}/images`,
    urlPath: `${this.page.url}/images`,
    sharpOptions: {
      animated: true
    },
    filenameFormat: function (id, imageSrc, width, format, options) {
      const extension = path.extname(imageSrc);
      const name = path.basename(imageSrc, extension);
  
      return `${name}-${width}w.${format}`;
    }
  });

  // Get the image data we need to output the image. Check if the image is of
  // type `gif`, `png`, or `jpg` (which is the default).
  let imageData;

  if(src.includes('.gif')) {
    imageData = metadata.gif[metadata.gif.length - 1];
  } else if(src.includes('.png')) {
    imageData = metadata.png[metadata.png.length - 1];
  } else {
    imageData = metadata.jpeg[metadata.jpeg.length - 1];
  }

  // Set up the image output. The `picture` tag and `srcset` attributes allow
  // more flexibility in what images are displayed in the browser.
  const picture = `<picture>${Object.values(metadata).map(imageFormat => {
    return `<source type="${imageFormat[0].sourceType}" srcset="${imageFormat.map(entry => entry.srcset).join(', ')}" sizes="100vw">`;
  }).join('')}<img src="${imageData.url}" width="${imageData.width}" alt="${alt}" decoding="async"></picture>`;

  // If there is a link, wrap it around the image.
  const image_content = link ? `<a href="${link}">${picture}</a>` : picture;

  // Return the image. The output code is a `picture` with different source
  // files, depending on the browser's size and what it supports.
  return image_content;
};
