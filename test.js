'use strict'

var test = require('tape')
var proxyquire = require('proxyquire')

test(function (t) {
  t.plan(2)

  var Segment = proxyquire('./', {
    'load-script-global': function (options, callback) {
      t.deepEqual(options, {
        url: 'https://cdn.segment.com/analytics.js/v1/mywritekey/analytics.min.js',
        global: 'analytics'
      })
      callback(null, {})
    }
  })

  var analytics = Segment({
    key: 'mywritekey'
  })

  t.equal(typeof analytics.track, 'function')
})
