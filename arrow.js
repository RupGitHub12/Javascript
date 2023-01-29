function multiArgumentSOLUTION() {
  const divide = (a, b) => a / b;
  return divide(40, 10);
}
// console.log(multiArgumentSOLUTION());

function noArgumentSOLUTION() {
  const getFive = () => 5;
  return getFive();
}
// console.log(noArgumentSOLUTION())

function singleArgumentSOLUTION() {
  const identity = (i) => i;
  return identity(350);
}
// console.log(singleArgumentSOLUTION())

function spreadWithArrowSOLUTION() {
  const asArray = (...args) => args;
  return asArray(1, 2, 3, 4);
}
// console.log(spreadWithArrowSOLUTION())

function withObjectSOLUTION() {
  const getObject = (favoriteCandy) => ({ favoriteCandy });
  return getObject("twix");
}
// console.log(withObjectSOLUTION())
