// Try both import styles (default or namespace)
import SDpkg from 'style-dictionary';
import * as SDns from 'style-dictionary';

// Handle cases where the import is wrapped in { default: … }
const StyleDictionary =
  SDpkg?.registerTransform ? SDpkg :
  SDpkg?.default?.registerTransform ? SDpkg.default :
  SDns;

// Debug: see what we got
console.log('Loaded StyleDictionary keys:', Object.keys(StyleDictionary));

// ✅ Register custom transform
StyleDictionary.registerTransform({
  name: 'name/no-collection',
  type: 'name',
  transformer: (token) => {
    // Ensure we strip the first part of the path (collection)
    if (!Array.isArray(token.path)) return token.name;
    return token.path.slice(1).join('-');
  }
});

// ✅ Import config as JSON
import config from './style-dictionary.config.json' with { type: 'json' };

// ✅ Build all platforms
const SD = StyleDictionary.extend(config);
SD.buildAllPlatforms();
