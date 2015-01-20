module.exports = function(fn, n) {
  if (n && n <= 5) {
    return require('./' + n)(fn);
  } else {
    return fn;
  }
};
