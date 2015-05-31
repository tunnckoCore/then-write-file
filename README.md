# then-write-file [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Write file to disk, using promises and creating intermediate directories if they don't exist.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coverage-img]][coverage-url] [![dependency status][david-img]][david-url]


## Install
```
npm i then-write-file --save
npm test
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
var thenWriteFile = require('then-write-file')

thenWriteFile('./foobar.txt', 'foo bar')
.then(function (res) {
  console.log(res)
  //=> true
})
.catch(console.error)
```


## Related
- [then-parse-json](https://github.com/tunnckoCore/then-parse-json): Gracefully parse JSON using promises - promisified JSON.parse
- [then-stringify-json](https://github.com/tunnckoCore/then-stringify-json): Gracefully stringify JSON using promises - promisified JSON.stringify
- [try-read-json](https://github.com/tunnckoCore/try-read-json): Fast, meaningful and correct try/catch flow for reading JSON with JSON.parse - support optional callback
- [then-read-json](https://github.com/tunnckoCore/then-read-json): Read JSON file using promises
- [then-write-json](https://github.com/tunnckoCore/then-write-json): Write contents to JSON file using JSON.stringify and promises. Creating intermediate directories if they don't exist.


## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/then-write-file/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/then-write-file
[npmjs-img]: https://img.shields.io/npm/v/then-write-file.svg?label=then-write-file

[license-url]: https://github.com/tunnckoCore/then-write-file/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/then-write-file
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/then-write-file.svg

[coverage-url]: https://codeclimate.com/github/tunnckoCore/then-write-file/coverage
[coverage-img]: https://img.shields.io/codeclimate/coverage/github/tunnckoCore/then-write-file.svg

[travis-url]: https://travis-ci.org/tunnckoCore/then-write-file
[travis-img]: https://img.shields.io/travis/tunnckoCore/then-write-file.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/then-write-file
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/then-write-file.svg

[david-url]: https://david-dm.org/tunnckoCore/then-write-file
[david-img]: https://img.shields.io/david/tunnckoCore/then-write-file.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/messages
[new-message-img]: https://img.shields.io/badge/send%20me-message-green.svg
