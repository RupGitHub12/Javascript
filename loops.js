// foreach

[1, 2, 3].forEach(function (item, i) {
  console.log(item, i);
});

//map
const three = [1, 2, 3];
const doubled = three.map(function (item) {
  return item * 2;
});
console.log(doubled);

//filter
const ints = [1, 2, 3];
const evens = ints.filter(function (item) {
  return item % 2 === 0;
});
console.log(evens);

//reduce
const sum = [1, 2, 3].reduce(function (result, item) {
  return result + item;
}, 0);
console.log(sum);

//some
const hasNegativeNumbers = [1, 2, 3, -1, 4].some(function (item) {
  return item < 0;
});
console.log(hasNegativeNumbers);

//every
const allPositiveNumbers = [1, 2, 3].every(function (item) {
  return item > 0;
});
console.log(allPositiveNumbers);

//find
const objects = [{ id: "a" }, { id: "b" }, { id: "c" }];
const found = objects.find(function (item) {
  return item.id === "b";
});
console.log(found);

//find index
const objects2 = [{ id: "a" }, { id: "b" }, { id: "c" }];
const foundIndex = objects2.findIndex(function (item) {
  return item.id === "b";
});
console.log(foundIndex);
