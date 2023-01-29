function stringIncludes() {
  const phrase = "in the box";
  return phrase.includes("the");
}
// console.log(stringIncludes());

function stringRepeat() {
  const repeatCount = 20;
  let marker = "*".repeat(repeatCount);
  // for (let i = 0; i < repeatCount; i++) {
  //   marker += "*";
  // }
  return marker;
}
// console.log(stringRepeat());

function arrayFill() {
  const value = "hey";
  const start = 1;
  const end = 4;
  const array = new Array(7);
  array.fill(value, start, end);
  // for (let i = 0; i < array.length; i++) {
  //   if (i >= start && i < end) {
  //     array[i] = value;
  //   }
  // }
  return array;
}
// console.log(arrayFill());
