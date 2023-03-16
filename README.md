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
- **RDS Postgres Deployment** - Deployment to AWS RDS Postgres using Serverless.

## Applications and Services

- **Playground** - A [Storybook](https://storybook.js.org/) playground.
- **React App** - React app created with [create-awesome-node-app](https://www.npmjs.com/package/create-awesome-node-app) powered by [Vite](https://vitejs.dev/).
- **Nest.js Service** - Nest.js service created using the [Basic Starter for NestJS on AWS Lambda with Serverless](https://github.com/nanlabs/devops-reference/tree/main/examples/serverless-node-typescript-nest).
- **Serverless RDS Postgres** - Serverless deployment to AWS RDS Postgres using [Serverless](https://www.serverless.com/).

## Getting Started

### Requirements

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- NodeJS - **You’ll need to have Node 16.13.2 or later on your local development machine** (but it’s not required on the server). You can use [fnm](https://github.com/Schniz/fnm) to easily switch Node versions between different projects.

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
