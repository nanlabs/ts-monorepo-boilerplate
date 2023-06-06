<div align="center">
<h1>React Boilerplate</h1>

</div>
<div align="center">

[![Main Validation](https://github.com/nanlabs/react-boilerplate/actions/workflows/ci.yml/badge.svg)](https://github.com/nanlabs/react-boilerplate/actions/workflows/ci.yml)
[![Deployment to GitHub Pages](https://github.com/nanlabs/react-boilerplate/actions/workflows/deployment.yml/badge.svg)](https://github.com/nanlabs/react-boilerplate/actions/workflows/deployment.yml)
[![License: MIT][licensebadge]][licenseurl]

[licensebadge]: https://img.shields.io/badge/License-MIT-blue.svg
[licenseurl]: https://github.com/nanlabs/react-boilerplate/master/LICENSE

</div>

This project was generated using [create-react-webpack-app](https://www.npmjs.com/package/create-react-webpack-project). **DON'T USE THIS TEMPLATE AS IT!** Generate yours using the command and following the options in the interactive menu. Check the docs for more information!

## Features

- ⚡️ **Instant HMR** - use [Vite](https://vitejs.dev/) on dev (no more refresh!)
- ⚛ React - [React](https://reactjs.org/) is used for UI
- 🦾 [TypeScript](https://www.typescriptlang.org/) - type safe

## Pre-packed

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)
- [eslint](https://eslint.org/) - Linting utility for JavaScript and JSX
- [prettier](https://prettier.io/) - Opinionated code formatter
- [husky](https://www.npmjs.com/package/husky) - Git hooks made easy
- [lint-staged](https://www.npmjs.com/package/lint-staged) - Run linters against staged git files and don't let 💩 slip into your code base!

## Quickstart

```sh
fnm use
npm install
npm run dev
```

## Useful resources

- [Project Structure](./docs/PROJECT_STRUCTURE.md)
- [Project Configuration](./docs/PROJECT_CONFIGURATION.md)
- [Components and Styling](./docs/COMPONENTS_AND_STYLING.md)
- [Performance recommendations](./docs/PERFORMANCE.md)
- [State Management recommendations](./docs/STATE_MANAGEMENT.md)

## Development

While developing, you will probably rely mostly on `npm run start`; however, there are additional scripts at your disposal:

| `npm run <script> -w @nanlabs/react-app` | Description                                                                                                             |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `dev`                                    | Serves your app at for local development                                                                                |
| `test`                                   | Runs unit tests with Jest. See [testing](#testing)                                                                      |
| `test:watch`                             | Runs `test` in watch mode to re-run tests when changed                                                                  |
| `lint`                                   | [Lints](http://stackoverflow.com/questions/8503559/what-is-linting) the project for potential errors                    |
| `lint:fix`                               | Lints the project and [fixes all correctable errors](http://eslint.org/docs/user-guide/command-line-interface.html#fix) |

## Production

Generate production files running

```sh
npm run build -w @nanlabs/react-app
```

Generate and serve production files running

```sh
npm run serve -w @nanlabs/react-app
```

Available scripts:

| `npm run <script> -w @nanlabs/react-app` | Description                                                                                                 |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `preview`                                | Serves your app using your production ready setup (`.env.production` and `NODE_ENV` equals to `production`) |
| `build`                                  | Builds the application to `dist/`                                                                           |

## Testing

To add a unit test, create a `.test.js` file anywhere inside of `src/`. Jest will automatically find these files.

## Contributing

You can report bugs, request features and create Pull Requests in the [Create-Node-App/react-extensions](https://github.com/Create-Node-App/react-extensions) repository!
