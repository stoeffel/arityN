module.exports = function(fn, n) {
  if (n <= 5) {
    return require('./' + n)(fn);
  } else {
    return fn;
  }
};
