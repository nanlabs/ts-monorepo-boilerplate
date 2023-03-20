# Web Extension + React

This project was generated using [create-awesome-node-app](https://www.npmjs.com/package/create-awesome-node-app). **DON'T USE THIS TEMPLATE AS IT!** Generate yours using the command and following the options in the interactive menu. Check the docs for more information!

## Features

- ⚡️ **Instant HMR** - use [Vite](https://vitejs.dev/) on dev (no more refresh!)
- ⚛ React - [React](https://reactjs.org/) is used for UI
- 💬 Effortless communications between contexts
- 🦾 [TypeScript](https://www.typescriptlang.org/) - type safe
- 🌍 WebExtension - isomorphic extension for Chrome, Firefox, and others
- 📃 Dynamic `manifest.json` with full type support

## Pre-packed

### WebExtension Libraries

- [`webextension-polyfill`](https://github.com/mozilla/webextension-polyfill) - WebExtension browser API Polyfill with types

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)
- [npm-run-all](https://github.com/mysticatea/npm-run-all) - Run multiple npm-scripts in parallel or sequential
- [eslint](https://eslint.org/) - Linting utility for JavaScript and JSX
- [prettier](https://prettier.io/) - Opinionated code formatter
- [husky](https://www.npmjs.com/package/husky) - Git hooks made easy
- [lint-staged](https://www.npmjs.com/package/lint-staged) - Run linters against staged git files and don't let 💩 slip into your code base!
- [web-ext](https://www.npmjs.com/package/web-ext) - A command line tool to help build, run, and test web extensions

## Quickstart

```sh
fnm use
npm install
npm run start -w @nanlabs/web-ext
```

Then load the extension in your browser running any of the following commands:

```sh
# on Chromium based browsers
npm run web-ext:chromium -w @nanlabs/web-ext

# on Firefox
npm run web-ext:firefox -w @nanlabs/web-ext
```

## Useful resources

- [Project Structure](./docs/PROJECT_STRUCTURE.md)
- [Project Configuration](./docs/PROJECT_CONFIGURATION.md)
- [Components and Styling](./docs/COMPONENTS_AND_STYLING.md)
- [Performance recommendations](./docs/PERFORMANCE.md)
- [State Management recommendations](./docs/STATE_MANAGEMENT.md)

## Development

While developing, you will probably rely mostly on `npm run start -w @nanlabs/web-ext`; however, there are additional scripts at your disposal:

| `npm run <script> -w @nanlabs/web-ext` | Description                                                                                                             |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `dev`                                  | Serves your app at for local development                                                                                |
| `test`                                 | Runs unit tests with Jest. See [testing](#testing)                                                                      |
| `test:watch`                           | Runs `test` in watch mode to re-run tests when changed                                                                  |
| `format`                               | Formats the project using [Prettier](https://prettier.io/)                                                              |
| `lint`                                 | [Lints](http://stackoverflow.com/questions/8503559/what-is-linting) the project for potential errors                    |
| `lint:fix`                             | Lints the project and [fixes all correctable errors](http://eslint.org/docs/user-guide/command-line-interface.html#fix) |

## Production

Generate production files running

```sh
npm run build
```

Available scripts:

| `npm run <script> -w @nanlabs/web-ext` | Description                                                                                                 |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `preview`                              | Serves your app using your production ready setup (`.env.production` and `NODE_ENV` equals to `production`) |
| `build`                                | Builds the application to `dist/`                                                                           |

## Testing

To add a unit test, create a `.test.js` file anywhere inside of `src/`. Jest will automatically find these files.

## Contributing

You can report bugs, request features and create Pull Requests in the [Create-Node-App/react-extensions](https://github.com/Create-Node-App/react-extensions) repository!
