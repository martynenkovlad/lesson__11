function logArguments(fn) {
    return function (...args) {
      console.log("Аргументи:", args);
  

      return fn.apply(this, args);
    };
  }
  
  function add(a, b) {
    return a + b;
  }
  
  const decoratedAdd = logArguments(add);
  
  console.log(decoratedAdd(1, 2));