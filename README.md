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

## Applications

- **Playground** - A [Storybook](https://storybook.js.org/) playground.
- **React App** - React app created with [create-react-webpack-app](https://www.npmjs.com/package/create-react-webpack-project) powered by [Vite](https://vitejs.dev/).
- **Nest.js Service** - Nest.js service created using the [Basic Starter for NestJS on AWS Lambda with Serverless](https://github.com/nanlabs/devops-reference/tree/main/examples/serverless-node-typescript-nest).

## Local Development

Each app and service has its own README file with instructions on how to run it locally.

## Running Linters

```sh
fnm use
npm i
npm run lint
```

or to fix linting errors

```sh
fnm use
npm i
npm run lint:fix
```

## Running Tests

```sh
fnm use
npm i
npm run test
```

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
