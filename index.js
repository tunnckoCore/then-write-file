/*!
 * then-write-file <https://github.com/tunnckoCore/then-write-file>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var fs = require('mz/fs')
var path = require('path')
var mkdirp = require('mkdirp-then')

module.exports = function thenWriteFile (fp, content) {
  if (typeof fp !== 'string') {
    throw new TypeError('then-write-file expect `fp` be string')
  }

  var dir = path.resolve(path.dirname(fp))
  return mkdirp(dir).then(function () {
    var filepath = path.resolve(fp)
    return fs.exists(filepath).then(function (exist) {
      if (exist) {
        var err = new Error('EEXIST, already exists "' + fp + '"')
        err.code = 'EEXIST'
        throw err
      }
      return fs.writeFile(filepath, content).then(function () {
        return true
      })
    })
  })
}
