/* eslint-env mocha */

var assert = require('assert')
var validation = require('../src/index')

describe.only('positiveNumber', function () {
  describe('Wrong type', function () {
    it('should be a string instead of a number', function () {
      assert.strictEqual('InvalidPositiveNumber', validation.positiveNumber('1'))
      assert.strictEqual('InvalidPositiveNumber', validation.positiveNumber('0'))
    })

    it('should be an object instead of a number', function () {
      assert.strictEqual('InvalidPositiveNumber', validation.positiveNumber({ key: 'value' }))
    })
  })

  describe('the numbers', function () {
    it('should be a positive number', function () {
      assert.strictEqual(undefined, validation.positiveNumber(1))
      assert.strictEqual(undefined, validation.positiveNumber(24512124))
      assert.strictEqual(undefined, validation.positiveNumber(324))
      assert.strictEqual(undefined, validation.positiveNumber(Infinity))
    })
    it('should be a negative number', function () {
      assert.strictEqual('InvalidPositiveNumber', validation.positiveNumber(-1))
      assert.strictEqual('InvalidPositiveNumber', validation.positiveNumber(-24512124))
      assert.strictEqual('InvalidPositiveNumber', validation.positiveNumber(-324))
      assert.strictEqual('InvalidPositiveNumber', validation.positiveNumber(-Infinity))
    })
    it('Zero', function () {
      assert.strictEqual('InvalidPositiveNumber', validation.positiveNumber(0))
    })
  })
})
