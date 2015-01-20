module.exports = function(fn) {
  return function() {
    fn.apply(null, arguments);
  };
};
