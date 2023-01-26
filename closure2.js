function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

// const add5 = makeAdder(5);
// const add10 = makeAdder(10);

// console.log(add5(2)); // 7
// console.log(add10(2)); // 12

console.log(makeAdder(5)(10));
