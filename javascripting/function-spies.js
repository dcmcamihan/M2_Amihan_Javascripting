function Spy(target, method) {
    let originalFunction = target[method]; 
    let spy = { count: 0 }; 
  
    target[method] = function(...args) {
      spy.count++; 
      return originalFunction.apply(this, args);
    };
  
    return spy;
  }
  
  module.exports = Spy;