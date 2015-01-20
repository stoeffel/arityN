module.exports = function(fn) {
  return function(a) {
    fn.apply(null, arguments);
  };
};
