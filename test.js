var test = require('tape')
test('loads a cat', function(t) {
  t.notOk(!!document.querySelector('.cat-picture'))
  require('cat-picture')
  t.ok(!!document.querySelector('.cat-picture'))
  t.end()
})