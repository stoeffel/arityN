arityN
============
[![Build Status](https://travis-ci.org/stoeffel/arityN.svg)](https://travis-ci.org/stoeffel/arityN) [![npm version](https://badge.fury.io/js/arityN.svg)](http://badge.fury.io/js/arityN)
> Wraps a function with a function of a sertain arity.

Installation
------------

`npm install arityN`

Usage
-----

```js
function fn(a, b, c, d) {
}

var arityN = require('arityN');
var newFn = arityN(fn, 3);

newFn.length; // => 3

var arity4 = require('arityN/4');
var newFn = arity4(fn);

newFn.length; // => 4

// Max arity is 5.
var newFn = arityN(fn, 7);

newFn.length; // => 4
```
