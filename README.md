# @lynxtaa/eslint-config

Shared ESLint configuration

## Install

```sh
npm install --save-dev @lynxtaa/eslint-config
```

Install `peerDependencies` if you're using yarn or older npm versions:

```sh
npm install --save-dev @typescript-eslint/eslint-plugin@5.39.0 @typescript-eslint/parser@5.39.0 eslint@8.24.0 eslint-config-prettier@8.5.0 eslint-plugin-import@2.26.0 eslint-plugin-unicorn@44.0.1
```

## Extend your config

```json
{
  "extends": "@lynxtaa/eslint-config"
}
```

## Extend your config (ES Modules)

```json
{
  "extends": ["@lynxtaa/eslint-config", "@lynxtaa/eslint-config/esm"]
}
```

## Add rules which requires type information

```js
module.exports = {
  extends: ['@lynxtaa/eslint-config', '@lynxtaa/eslint-config/requires-typechecking'],
  // See https://typescript-eslint.io/docs/linting/typed-linting
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
}
```
