<!--lint disable double-link awesome-heading awesome-git-repo-age awesome-toc-->

<div align="center">
<p>
    <img
        style="width: 200px"
        width="200"
        src="https://avatars.githubusercontent.com/u/4426989?s=200&v=4"
    >
</p>
<h1>TypeScript Monorepo Boilerplate</h1>

[Changelog](#) |
[Contributing](./CONTRIBUTING.md)

</div>
<div align="center">

[![Continious Integration][cibadge]][ciurl]
[![License: MIT][licensebadge]][licenseurl]

</div>

This repository is a starter kit for a TypeScript monorepo project. It is based on TypeScript, Npm, ESLint, Prettier, Jest, Turborepo and Changesets.

This project was generated using [create-awesome-node-app](https://www.npmjs.com/package/create-awesome-node-app). **DON'T USE THIS TEMPLATE AS IT!** Generate yours using the command and following the options in the interactive menu. Check the docs for more information!

## Features

- **Monorepo** - All packages are managed by [Turborepo](https://turborepo.com/).
- **NPM Workspaces** - All packages are managed by [NPM Workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces).
- **Changesets** - All packages are managed by [Changesets](https://github.com/changesets/changesets).
- **TypeScript** - All packages are written in [TypeScript](https://www.typescriptlang.org/).
- **ESLint** - All packages are linted by [ESLint](https://eslint.org/).
- **Prettier** - All packages are formatted by [Prettier](https://prettier.io/).
- **Jest** - All packages are tested by [Jest](https://jestjs.io/).
- **React** - There is a [React](https://reactjs.org/) app inside the apps folder.
- **Nest.js** - There is a [Nest.js](https://nestjs.com/) service inside the services folder.
- **Storybook** - There is a [Storybook](https://storybook.js.org/) playground inside the playgrounds folder.
- **Local Development Environment** - Local development using Docker Compose, Serverless Offline, and Vite.

## Pre-packed

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)
- [Turbo](https://turborepo.com/) - A monorepo manager for JavaScript and TypeScript
- [Changesets](https://github.com/changesets/changesets) - A way to manage your versioning and changelogs with a focus on multi-package repositories
- [npm-run-all](https://github.com/mysticatea/npm-run-all) - Run multiple npm-scripts in parallel or sequential
- [eslint](https://eslint.org/) - Linting utility for JavaScript and JSX
- [prettier](https://prettier.io/) - Opinionated code formatter
- [husky](https://www.npmjs.com/package/husky) - Git hooks made easy
- [lint-staged](https://www.npmjs.com/package/lint-staged) - Run linters against staged git files and don't let 💩 slip into your code base!

### Continuous Integration

We use [GitHub Actions](https://github.com/features/actions) to run our continuous integration pipeline. The pipeline is defined in the [ci.yml](./.github/workflows/ci.yml) file. The pipeline runs the following steps:

- **Linter** - Runs the linter on the project (using `npm run lint`). This step will fail if the linter finds any errors.
- **Type Check** - Runs the type checker on the project (using `npm run typecheck`). This step will fail if the type checker finds any errors.
- **Shell Check** - Runs the shell checker on the project. This step will fail if the shell checker finds any errors.
- **Markdown Lint** - Runs the markdown linter on the project. This step will fail if the markdown linter finds any errors.
- **TODOs to GitHub Issues** - Creates GitHub issues for all TODOs in the project.
- **Pull Request Review** - Adds a comment to the pull request with a summary of the changes.

## Applications and Services

- **Playground** - A [Storybook](https://storybook.js.org/) playground.
- **React App** - React app created with [create-awesome-node-app](https://www.npmjs.com/package/create-awesome-node-app) powered by [Vite](https://vitejs.dev/).
- **Nest.js Service** - Nest.js service created using the [Basic Starter for NestJS on AWS Lambda with Serverless](https://github.com/nanlabs/devops-reference/tree/main/examples/serverless-node-typescript-nest).
- **WebExtension** - WebExtension created with [create-awesome-node-app](https://www.npmjs.com/package/create-awesome-node-app) powered by [Vite](https://vitejs.dev/) and [WebExtension-Polyfill](https://github.com/mozilla/webextension-polyfill).

## Getting Started

### Requirements

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- NodeJS - **You’ll need to have Node 18.15.0 or later on your local development machine** (but it’s not required on the server). You can use [fnm](https://github.com/Schniz/fnm) to easily switch Node versions between different projects.

### Setup Local Environment

- Setup the correct NodeJS version using `fnm` and install dependencies.

```sh
fnm use
export NODE_AUTH_TOKEN=<your-npm-token>
npm install
```

> NOTE: if you are working in a `arm64` platform (e.g MacBook with m1 or m2 chip), you might need to run `npm i turbo && npm i`.

- Run the local dev environment.

```sh
npm run local:up
```

### Running the Applications

Each app and service has its own `README.md` file with instructions on how to run it locally.

### Available Scripts

In the project directory, you can run:

| `npm run <script>` | Description                                                                                                             |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| `test`             | Runs unit tests with Jest.                                                                                              |
| `lint`             | [Lints](http://stackoverflow.com/questions/8503559/what-is-linting) the project for potential errors                    |
| `lint:fix`         | Lints the project and [fixes all correctable errors](http://eslint.org/docs/user-guide/command-line-interface.html#fix) |
| `format`           | Formats the project using [Prettier](https://prettier.io/)                                                              |
| `storybook`        | Runs [Storybook](https://storybook.js.org/)                                                                             |
| `build-storybook`  | Builds [Storybook](https://storybook.js.org/)                                                                           |

## Contributing

- Contributions make the open source community such an amazing place to learn, inspire, and create.
- Any contributions you make are **truly appreciated**.
- Check out our [contribution guidelines](./CONTRIBUTING.md) for more information.

## Contributors

<a href="https://github.com/nanlabs/ts-monorepo-boilerplate/contributors">
  <img src="https://contrib.rocks/image?repo=nanlabs/ts-monorepo-boilerplate"/>
</a>

Made with [contributors-img](https://contrib.rocks).

[cibadge]: https://github.com/nanlabs/ts-monorepo-boilerplate/actions/workflows/ci.yml/badge.svg
[licensebadge]: https://img.shields.io/badge/License-MIT-blue.svg
[ciurl]: https://github.com/nanlabs/ts-monorepo-boilerplate/actions/workflows/ci.yml
[licenseurl]: https://github.com/nanlabs/ts-monorepo-boilerplate/blob/main/LICENSE
