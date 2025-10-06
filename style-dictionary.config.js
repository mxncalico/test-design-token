import StyleDictionary from 'style-dictionary';

StyleDictionary.registerTransform({
  name: 'name/no-collection',
  type: 'name',
  transformer: (token) => {
    const path = token.path.slice(1); // remove the top-level key
    return path.join('-');
  }
});

export default {
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
