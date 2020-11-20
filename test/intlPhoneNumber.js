/* eslint-env mocha */

var assert = require('assert')
var validation = require('../src/index')

describe.only('intlPhoneNumber', function () {
  describe('the wrong type', function () {
    it('should be a number instead of a string', function () {
      assert.strictEqual('InvalidIntlPhoneNumber', validation.intlPhoneNumber(1))
      assert.strictEqual('InvalidIntlPhoneNumber', validation.intlPhoneNumber(0))
    })

    it('object instead of a string', function () {
      assert.strictEqual('InvalidIntlPhoneNumber', validation.intlPhoneNumber({ key: 'value' }))
    })
  })

  describe('the wrong phone numbers formats', function () {
    it('should be a phone numbers without + at the beginning', function () {
      assert.strictEqual('InvalidIntlPhoneNumber', validation.intlPhoneNumber('1'))
      assert.strictEqual('InvalidIntlPhoneNumber', validation.intlPhoneNumber(0))
    })
    it('should be a phone numbers with - as a separator', function () {
      assert.strictEqual('InvalidIntlPhoneNumber', validation.intlPhoneNumber('+27834152920'))
      assert.strictEqual('InvalidIntlPhoneNumber', validation.intlPhoneNumber('+2733389826'))
    })
    it('should be a phone numbers with a space as a separator', function () {
      assert.strictEqual('InvalidIntlPhoneNumber', validation.intlPhoneNumber('+27834152920'))
      assert.strictEqual('InvalidIntlPhoneNumber', validation.intlPhoneNumber('+2733389826'))
    })
  })

  describe('the right phone numbers format', function () {
    it('should be a phone numbers without separators and with + at the beginning', function () {
      assert.strictEqual(undefined, validation.intlPhoneNumber('+27834152920'))
      assert.strictEqual(undefined, validation.intlPhoneNumber('+2733389826'))
    })
  })
})
