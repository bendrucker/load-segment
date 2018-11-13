# load-segment [![Build Status](https://travis-ci.org/bendrucker/load-segment.svg?branch=master)](https://travis-ci.org/bendrucker/load-segment) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/load-segment.svg)](https://greenkeeper.io/)

> Load Segment's analytics.js library asynchronously with method queueing


## Install

```
$ npm install --save load-segment
```


## Usage

```js
var Segment = require('load-segment')

var analytics = Segment({key: 'myWriteKey'})

analytics.track('MyEvent')
```

## API

#### `Segment(options)` -> `object`

Returns a queue interface that accumulates calls to Segment while it loads and proxies them once it arrives.

##### options

*Required*  
Type: `object`

Segment configuration. Currently only `key` is supported and required.


## License

MIT © [Ben Drucker](http://bendrucker.me)
