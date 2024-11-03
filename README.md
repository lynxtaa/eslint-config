# @lynxtaa/eslint-config

Shared ESLint configuration

## Install

```sh
npm install --save-dev @lynxtaa/eslint-config
```

## Extend your config

```js
import eslintConfig from '@lynxtaa/eslint-config'

export default [...eslintConfig]
```

## Extend your config (ES Modules)

```js
import eslintConfig from '@lynxtaa/eslint-config'
import eslintConfigEsm from '@lynxtaa/eslint-config/esm'

export default [...eslintConfig, ...eslintConfigEsm]
```

## Add rules which requires type information

```js
import eslintConfig from '@lynxtaa/eslint-config'
import requiresTypechecking from '@lynxtaa/eslint-config/requires-typechecking'

export default [
  ...eslintConfig,
  ...requiresTypechecking,
  // See https://typescript-eslint.io/getting-started/typed-linting
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]
```
