import StyleDictionary from 'style-dictionary';

// Register custom transform BEFORE loading config
StyleDictionary.registerTransform({
  name: 'name/no-collection',
  type: 'name',
  transformer: (token) => {
    const path = token.path.slice(1); // remove the first key (collection)
    return path.join('-');
  }
});

// Import config only after transform is registered
import config from './style-dictionary.config.json' with { type: 'json' };

const SD = StyleDictionary.extend(config);
SD.buildAllPlatforms();
