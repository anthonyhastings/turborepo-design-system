# Turborepo Design System (TDS)

## Introduction

This repository showcases using a monorepo to house a design system and the various packages one could contain. It is built for React and uses a number of different tools to create and maintain packages:

- 🏎 [Turborepo](https://turborepo.org) — High-performance build system for monorepos
- 👷 [Vite](https://vitejs.dev/) — ES Module focused build tool and bundler
- 🧪 [Cypress](https://www.cypress.io/) — Browser based test runner
- 📖 [Storybook](https://storybook.js.org/) — UI component environment powered by Vite
- 🔍 [Syncpack](https://github.com/JamieMason/syncpack) — Ensures consistent dependencies within monorepos
- 🔐 [Commitlint](https://commitlint.js.org/#/) — Checks commits follow conventional commits format
- 📋 [Changesets](https://github.com/changesets/changesets) — Managing versioning, publishing and changelogs
- 🛠 [GitHub Actions](https://github.com/changesets/action) — Running workflows in continuous integration

## Turborepo

[Turborepo](https://turborepo.org) is a high-performance build system for JavaScript and TypeScript codebases. It was designed after the workflows used by massive software engineering organizations to ship code at scale. Turborepo abstracts the complex configuration needed for monorepos and provides fast, incremental builds with zero-configuration remote caching.

Using Turborepo simplifes managing your design system monorepo, as you can have a single lint, build, test, and release process for all packages. [Learn more](https://vercel.com/blog/monorepos-are-changing-how-teams-build-software) about how monorepos improve your development workflow.

Turborepo is configured in CI/CD to only test packages that have changes detected in their workspaces, and, workspaces that depend on said package. For example, if Package A depends on Package B, and Package B changes, then turborepo will ensure both packages have their tests run.

## Main Features & Benefits

Highlights of benefits from using this monorepo are:

- Turborepo caching so commands don't re-run unless changed detected.
- Internal packages to house common configuration for tools like ESLint, Prettier, TypeScript.
- Ensures consistent package versioning via syncpack.
- Type-checking method within each package that turborepo can cache.
- Shared Storybook (`apps/docs`) across all React related packages.

### How Do Workspaces Work?

Each application and package added to the monorepo will operate within its own workspace (specified within the top-level package file). Workspaces maintain their own package files but the entire monorepo has a single top-level lock file. All of a projects dependencies are installed together at the top-level which gives Yarn the ability to de-dupe and optimize them.

Each workspace has a symlink created for it within the top-level `node_modules` folder which is what allows packages to depend on each other and have up to date code without requiring publishing. This is a better mechanism than `yarn link` because it only affects the current project tree and not the whole file systems module system.

When importing from other workspaces, you can import the built version of the workspace by importing from its root where your tooling might pick the package files `main`, `module` or `exports` fields. Alternatively you could also directly import the workspaces source files. For example, the `<Button />` story imports the components source file from `@acme/core/src`.

### Useful Commands

- `yarn build` - Build all applications and packages
- `yarn clean` - Clean all `.turbo`, `node_modules` and `dist` folders
- `yarn lint` - Lint all relevant packages
- `yarn lint:packages` - Validate package dependencies are in sync
- `yarn test` - Test all relevant packages
- `yarn types:check` - Type-check all relevant packages

## Applications & Packages

This Turborepo includes the following packages and applications:

- `apps/docs`: Component documentation site with Storybook
- `packages/config-eslint`: Internal package for ESLint shared configuration
- `packages/config-pretter`: Internal package for Prettier shared configuration
- `packages/config-tsconfig`: Internal package for TypeScript shared configuration
- `packages/tds-core`: External package for current React components
- `packages/tds-deprecated`: External package for deprecated React components
- `packages/tds-utils`: External package for shared React utilities

Each application and package is a TypeScript project. Yarn Workspaces enables us to "hoist" dependencies that are shared between packages to the root package file. This means smaller `node_modules` folders and a better local dev experience. They also have common commands such as `build`, `clean`, `lint` and `test` where appropriate.

### Compilation

To make the core library code work across all browsers, we need to compile the raw TypeScript and React code to plain JavaScript. We can accomplish this with `vite`, which uses `esbuild` to greatly improve performance. Running `yarn build` from the root of the Turborepo will run the `build` command defined in each package file. Turborepo runs each `build` in parallel and caches & hashes the output to speed up future builds.

### Testing

Relevant monorepo packages use Cypress for browser based component testing. The `yarn test` command will run these commands in parallel, caching and hashing the output to speed up future runs. When this command is run locally there are no further considerations, however, in CI the turbo command will try to run these in parallel. Each process will try to insantiate `xvfb` which causes issues. The CI script instantiates this before running the turbo command.

### Storybook

Storybook provides us with an interactive UI playground for our components. This allows us to preview our components in the browser and instantly see changes when developing locally. This example preconfigures Storybook to:

- Use Vite to bundle stories instantly (in milliseconds)
- Automatically find any stories inside the `stories/` folder
- Support using module path aliases like `@anthonyhastings/tds-core` for imports
- Write MDX for component documentation pages

## Versioning & Publishing Packages

- `yarn changeset` - Generate a changeset file
- `yarn version-packages` - Update versions, changelogs and dependencies of packages.
- `yarn release` - Publishes changes to package registry and creates git tags.

The monorepo uses [Changesets](https://github.com/changesets/changesets) to manage versions, create changelogs, and publish to the package registry. You'll need to create an `NPM_TOKEN` and `GITHUB_TOKEN` and add it to your GitHub repository settings to enable access to the package registry.

### Generating the Changelog

To generate your changelog, run `yarn changeset` locally:

1. **Which packages would you like to include?** – This shows which packages and changed and which have remained the same. By default, no packages are included. Press `space` to select the packages you want to include in the `changeset`.
1. **Which packages should have a major bump?** – Press `space` to select the packages you want to bump versions for.
1. If doing the first major version, confirm you want to release.
1. Write a summary for the changes.
1. Confirm the changeset looks as expected.
1. A new Markdown file will be created in the `changeset` folder with the summary and a list of the packages included.

These changeset files should be part of your PR and committed into the trunk branch, ready for future release.

### Releasing

When you merge your PR into the trunk branch, the [GitHub Action](https://github.com/changesets/action) will create a PR with all of the package versions updated and changelogs updated. If more PRs get merged with more changesets then the PR opened by the GitHub Action will be updated.

Merging this PR will, along with updating all of the files it changed, make the GitHub Action trigger it's release cycle where it attempts to publish each package not marked as `private` within the workspaces package file.

## Further Information

- [Understanding Monorepos](https://monorepo.tools/)
- [Node.js - Loading from `node_module` folders](https://nodejs.org/api/modules.html#loading-from-node_modules-folders)
- [Yarn Workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/)
- [Turborepo - Workspaces](https://turbo.build/repo/docs/handbook/workspaces)
- [Turborepo - Design System Example](https://github.com/vercel/turborepo/tree/main/examples/design-system)
- [Changesets - CLI](https://github.com/changesets/changesets/blob/main/docs/command-line-options.md)
