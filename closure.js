function init() {
  var name = "Rupesh"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, a closure
    console.log(name); // displayName() uses variable declared in the parent function
  }
  return displayName;
}

let printMyName = init();

printMyName();
