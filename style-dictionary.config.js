const action = process.env.GITHUB_EVENT_ACTION;

module.exports = {
  source: [`${action}/${action}.json`],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: `${action}/`,
      files: [
        {
          destination: `${action}.css`,
          format: 'css/variables',
          options: { 
            outputReferences: true 
          }
        }
      ]
    }
  }
};
