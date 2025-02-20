function curryN(fn, n = fn.length) {
    return function curried(...args) {
      if (args.length >= n) {
        return fn(...args);
      }
      return (...nextArgs) => curried(...args, ...nextArgs);
    };
  }
  
  module.exports = curryN;