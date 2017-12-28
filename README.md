# eslint-config-cantonjs

[![Build Status](https://travis-ci.org/cantonjs/eslint-config-cantonjs.svg?branch=master)](https://travis-ci.org/cantonjs/eslint-config-cantonjs)

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for the Cantonjs


## Installation

```
$ npm install --save-dev eslint eslint-config-cantonjs
```


## Usage

Once the `eslint-config-cantonjs` package is installed, you can use it by specifying `cantonjs` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "cantonjs",
  "rules": {
    // Additional, per-project rules...
  }
}
```

## Configures / Extends

- `extends: "cantonjs"` basic usage
- `extends: "cantonjs/base"` the same with `extends: "cantonjs"`
- `extends: "cantonjs/base-resolve"` `base` + [import/resolver](https://github.com/benmosher/eslint-plugin-import)
- `extends: "cantonjs/react"` `base` + `react`
- `extends: "cantonjs/react-resolve"` `base` + `react` + [import/resolver](https://github.com/benmosher/eslint-plugin-import)


## License

MIT © Cantonjs
