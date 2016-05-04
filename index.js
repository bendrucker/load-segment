'use strict'

var Lazy = require('lazy-async')
var load = require('load-script-global')
var partial = require('ap').partial
var assert = require('assert-ok')
var methods = require('./methods.json')

module.exports = Segment

function Segment (options) {
  assert(options.key, 'Segment key is required')

  return Lazy(methods, partial(load, {
    url: 'https://cdn.segment.com/analytics.js/v1/' + options.key + '/analytics.min.js',
    global: 'analytics'
  }))
}
