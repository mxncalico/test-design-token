const StyleDictionary = require('style-dictionary');

// Custom transform: strip top-level collection name
StyleDictionary.registerTransform({
  name: 'name/no-collection',
  type: 'name',
  transformer: (token) => {
    const path = token.path.slice(1); // remove the first key (collection)
    return path.join('-'); // join remaining path with hyphens
  }
});

module.exports = {
  source: ["design-tokens.json"],
  platforms: {
    css: {
      transformGroup: "css",
      transforms: ["name/no-collection", "color/css"],
      buildPath: "./",
      files: [
        {
          destination: "variables.css",
          format: "css/variables",
          options: {
            outputReferences: true
          }
        }
      ]
    }
  }
};
