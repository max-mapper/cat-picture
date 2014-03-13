var test = require('tape')
test('loads a cat', function(t) {
  t.notOk(!!document.querySelector('.cat-picture'))
  require('./')
  t.ok(!!document.querySelector('.cat-picture'))
  t.end()
})