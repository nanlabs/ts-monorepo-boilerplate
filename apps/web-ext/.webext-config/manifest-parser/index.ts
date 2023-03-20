import type { Manifest } from 'webextension-polyfill';

class ManifestParser {
  private constructor() {}

  static convertManifestToString(manifest: Manifest.WebExtensionManifest): string {
    return JSON.stringify(manifest, null, 2);
  }
}

export default ManifestParser;
