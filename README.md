# AMS Template - Developer Guidelines

## Overview

This README provide the coding standards for developer working on this project. Follow these guidelines to ensure consistency and maintainability across the codebase.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Project Structure](#project-structure)
3. [Coding Standards](#coding-standards)
   - [Naming Conventions](#naming-conventions)
   - [Git Standards](#git-standards)
   - [Code Formatting](#code-formatting)
   - [Comments and Documentation](#comments-and-documentation)
4. [Version Control](#version-control)
5. [Testing](#testing)
6. [Code Review Process](#code-review-process)

## Prerequisites

- **Node.js** version: `v20.11.1`
- **npm** version: `10.2.4`

## Project Structure

```sh
src/
├── assets/             - Assets.
├── components/         - Reusable React components.
├── hooks/              - Custom Hooks.
├── lib/                - Library where Utils and Other things.
├── pages/              - Page-level components
├── services/           - API calls and services
├── store/              - Application Global States.
└── urls/               - Application URLs
```

## Coding Standards

### Naming Conventions

- Variables and Function: Use `camelCase`.
- Classes and Components: Use `PascalCase`.
- Constants: Use `UPPER_CASE` with underscore.
- Folder Names: Use `kebab-case`.
- File Names: Use `kebab-case` for Components.
- Server Variables: Use `snake_case`.

### Git Standards

Commit message Standards.

eg: If code changes is a bug fix then it's commit message should looks like this.

`fix(ui): x axis overflow bug fix.`

```sh
feat:     A new feature.
fix:      A bug fix.
docs:     Documentation only changes.
style:    Changes that do not affect the meaning of the code.
refactor: A code change that neither fixes a bug nor adds a feature.
perf:     A code change that improves performance.
test:     Adding missing tests or correcting existing tests.

```

### Code Formatting

Install dependencies.

```sh
npm i -D prettier @ianvs/prettier-plugin-sort-imports
```

Create the file, and add the following rules for prettier `.prettierrc.json`.

```json
{
  "arrowParens": "avoid",
  "bracketSpacing": true,
  "endOfLine": "lf",
  "semi": true,
  "tabWidth": 2,
  "trailingComma": "none",
  "plugins": ["@ianvs/prettier-plugin-sort-imports"],
  "importOrder": [
    "<BUILTIN_MODULES>",
    "^react",
    "<THIRD_PARTY_MODULES>",
    "^@inkdropapp",
    "^@[/]",
    "^[.].*$",
    "<TYPES>",
    "^[/].*$",
    "[.]css$"
  ]
}
```

Add the following scripts in `package.json` to run the prettier.

```json
{
  ...
  "scripts": {
    ...
    "format": "prettier --write './**/*.{js,jsx,ts,tsx,css,md,json}' --config ./.prettierrc.json"
  },
}
```

And run the command `npm format`.
