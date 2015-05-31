/*!
 * then-write-file <https://github.com/tunnckoCore/then-write-file>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var thenWriteFile = require('./index')

test('write-file:', function () {
  test('should throw TypeError if `fp` is not string', function (done) {
    function fixture () {
      thenWriteFile(12345)
    }

    test.throws(fixture, TypeError)
    test.throws(fixture, /then-write-file expect `fp` be string/)
    done()
  })
  test('should write `content` to file', function (done) {
    var promise = thenWriteFile('./foobar.txt', 'foobar')

    promise.then(function (res) {
      test.equal(res, true)
      done()
    })
  })
  test('should create directory and write file to it', function (done) {
    var promise = thenWriteFile('./fixture/foobar.txt', 'foobar')

    promise.then(function (res) {
      test.equal(res, true)
      done()
    })
  })
  test('should create nested directories and write file the final', function (done) {
    var promise = thenWriteFile('./baz/bar/qux/foobar.txt', 'foobar')

    promise.then(function (res) {
      test.equal(res, true)
      done()
    })
  })
  test('should write file to already existing directory', function (done) {
    var promise = thenWriteFile('./fixture/barbaz.txt', 'foobar')

    promise.then(function (res) {
      test.equal(res, true)
      done()
    })
  })
  test('should catch error if file exists', function (done) {
    var promise = thenWriteFile('./foobar.txt', 'foobar')

    promise.catch(function (err) {
      test.ifError(!err)
      test.equal(err.code, 'EEXIST')
      test.equal(err.message, 'EEXIST, already exists "./foobar.txt"')
      done()
    })
  })
  test('should catch error if directory exists', function (done) {
    var promise = thenWriteFile('./baz', 'foobar')

    promise.catch(function (err) {
      test.ifError(!err)
      test.equal(err.code, 'EEXIST')
      test.equal(err.message, 'EEXIST, already exists "./baz"')
      done()
    })
  })
})
