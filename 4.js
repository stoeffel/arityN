module.exports = function(fn) {
  return function(a, b, c, d) {
    fn.apply(null, arguments);
  };
};
