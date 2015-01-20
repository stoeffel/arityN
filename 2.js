module.exports = function(fn) {
  return function(a, b) {
    fn.apply(null, arguments);
  };
};
