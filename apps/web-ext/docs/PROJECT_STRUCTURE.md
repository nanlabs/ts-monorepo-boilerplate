# 🗄️ Project Structure

Most of the code lives in the `src` and `.webext-config` folders. The `src` folder contains the source code for the extension. The `.webext-config` folder contains the configuration files for the extension.

```sh
.webext-config/ # configuration files for the extension
|
+-- manifest.ts # manifest for the extension
|
src/ # source code
|
+-- assets # static assets
|
+-- background # background scripts
|
+-- content # content scripts
|
+-- devtools # devtools scripts
|
+-- newtab # newtab scripts
|
+-- options # options scripts
|
+-- panel # panel scripts
|
+-- popup # popup scripts
```

## 📦 .webext-config

The `manifest.ts` file contains the manifest for the extension. The `manifest.ts` file is used to generate the `manifest.json` file during the build process.

## 📦 Assets

The `assets` folder contains static assets like images, fonts, etc. These assets are copied to the `dist` folder during the build process.

## 📦 Background

The `background` folder contains the background script. The background script is the entry point for the extension. It is loaded when the extension is installed and runs in the background. It can be used to listen for events and to send messages to the content scripts.

## 📦 Content

The `content` folder contains the content scripts. The content scripts are injected into the web pages. They can be used to listen for events and to send messages to the background script.

## 📦 Devtools

The `devtools` folder contains the devtools scripts. The devtools scripts are injected into the devtools. They can be used to listen for events and to send messages to the background script.

## 📦 Newtab

The `newtab` folder contains the newtab scripts. The newtab scripts are injected into the newtab page. They can be used to listen for events and to send messages to the background script.

## 📦 Options

The `options` folder contains the options scripts. The options scripts are injected into the options page. They can be used to listen for events and to send messages to the background script.

## 📦 Panel

The `panel` folder contains the panel scripts. The panel scripts are injected into the panel page. They can be used to listen for events and to send messages to the background script.

## 📦 Popup

The `popup` folder contains the popup scripts. The popup scripts are injected into the popup page. They can be used to listen for events and to send messages to the background script.
