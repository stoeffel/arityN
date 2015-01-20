module.exports = function(fn) {
  return function(a, b, c) {
    fn.apply(null, arguments);
  };
};
