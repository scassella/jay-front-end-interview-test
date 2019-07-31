
function tripleAdd(x) {
  return function(y) {
    return function(z) {
      return x + y + z;
    }
  }
}

tripleAdd(10)(20)(30);

// What is an IIFE, and why is it used?
// An IIFE (or Immediately Invoked Function Expression) is an anonymous function that is invoked as it is defined in the code. The purpose of this is to provide data privacy within a module in ES5.
//Executed right after it is created

// Code out an example of an IIFE

(function() {
  console.log('hello');
})(); //Note I never explicitly call this function, yet it still runs.

//Better example
(function(num) {
  return num*2;
})(4);
// Main reason is to preserve a private scope within your function




