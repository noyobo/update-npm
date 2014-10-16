update-npm
==========

[![npm version](http://img.shields.io/npm/v/update-npm.svg)](https://www.npmjs.org/package/update-npm)
[![npm download](http://img.shields.io/npm/dm/update-npm.svg)](https://www.npmjs.org/package/update-npm)

[![NPM](https://nodei.co/npm/update-npm.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/update-npm/)

Check a NPM module version update 

## Install

```bash
npm install --save update-npm
```
![20141016152856](https://cloud.githubusercontent.com/assets/1292082/4658944/249de468-5506-11e4-8b91-3104d6861d22.png)

## Api

`update.notify(name, version [, time])`

`time` ms, default: 1000 * 60 * 60 * 24 [@see](https://github.com/yeoman/update-notifier#updatenotifieroptions)

`update.upgrade(name, version)`

Force show version status

## Exemple

```javascript
var update = require('update-npm');

update.notify('gbm', '1.0.0' , 1000)

```

```javascript
var update = require('update-npm');

update.upgrade('gbm', '1.0.0')

```
