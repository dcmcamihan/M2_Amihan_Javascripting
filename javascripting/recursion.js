function reduce(arr, fn, initial) {
    if (arr.length === 0) return initial;
    
    const head = arr[0];
    const tail = arr.slice(1); 
    
    return reduce(tail, fn, fn(initial, head, arr.length - tail.length, arr));
  }
  
  module.exports = reduce;