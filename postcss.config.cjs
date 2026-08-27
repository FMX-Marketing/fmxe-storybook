module.exports = {
  plugins: [
    require('postcss-import-ext-glob'),
    require('postcss-import'),
    require('postcss-preset-env')({
      features: {
        'nesting-rules': true,
        'custom-media-queries': true,
        'custom-properties': false,
      },
    }),
  ],
};
