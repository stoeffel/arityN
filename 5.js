module.exports = function(fn) {
  return function(a, b, c, d, e) {
    fn.apply(null, arguments);
  };
};
