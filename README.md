# babel-preset-mobx

> Babel preset for all Mobx plugins.

## Install

```sh
$ npm install --save-dev babel-preset-mobx
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["mobx"]
}
```

### Via CLI

```sh
$ babel script.js --presets mobx 
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  presets: ["mobx"]
});
```
