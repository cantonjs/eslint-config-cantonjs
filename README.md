# eslint-config-cantonjs

[![Build Status](https://travis-ci.org/cantonjs/eslint-config-cantonjs.svg?branch=master)](https://travis-ci.org/cantonjs/eslint-config-cantonjs)
[![Dependencies](https://david-dm.org/cantonjs/eslint-config-cantonjs.svg)](https://david-dm.org/cantonjs/eslint-config-cantonjs)
[![License](https://img.shields.io/badge/license-MIT_License-brightgreen.svg?style=flat)](https://github.com/cantonjs/eslint-config-cantonjs/blob/master/LICENSE)

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for the Cantonjs

## Installation

```
$ npm install --save-dev eslint eslint-config-cantonjs eslint-config-standard eslint-plugin-import eslint-plugin-jest eslint-plugin-node eslint-plugin-promise eslint-plugin-react eslint-plugin-standard
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

* `extends: "cantonjs"` basic usage
* `extends: "cantonjs/base"` the same with `extends: "cantonjs"`
* `extends: "cantonjs/react"` `base` + `react`

## Related Projects

* [eslint-config-cantonjs-resolver](https://github.com/cantonjs/eslint-config-cantonjs-resolver)

## License

MIT © Cantonjs
