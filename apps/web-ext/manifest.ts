import type { Manifest } from 'webextension-polyfill';
import packageJson from './package.json';

const manifest: Manifest.WebExtensionManifest = {
  manifest_version: 3,
  name: packageJson.name,
  version: packageJson.version,
  description: packageJson.description,
  options_ui: {
    page: 'src/options/index.html',
  },
  background: { service_worker: 'src/background/index.js' },
  action: {
    default_popup: 'src/popup/index.html',
    default_icon: 'icon-34.png',
  },
  chrome_url_overrides: {
    newtab: 'src/newtab/index.html',
  },
  icons: {
    '128': 'icon-128.png',
  },
  content_scripts: [
    {
      matches: ['http://*/*', 'https://*/*', '<all_urls>'],
      js: ['src/content/index.js'],
      // KEY for cache invalidation
      css: ['assets/css/contentStyle<KEY>.chunk.css'],
    },
  ],
  devtools_page: 'src/devtools/index.html',
  web_accessible_resources: [
    {
      resources: ['assets/js/*.js', 'assets/css/*.css', 'icon-34.png', 'icon-128.png'],
      matches: ['*://*/*'],
    },
  ],
};

export default manifest;
