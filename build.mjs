import StyleDictionary from 'style-dictionary';
import config from './style-dictionary.config.json' assert { type: 'json' };

// Custom transform: strip top-level collection name
StyleDictionary.registerTransform({
  name: 'name/no-collection',
  type: 'name',
  transformer: (token) => {
    const path = token.path.slice(1); // remove first key (collection)
    return path.join('-');
  }
});

// Extend with your JSON config and build
const SD = StyleDictionary.extend(config);
SD.buildAllPlatforms();
