const value = add(null, 3);
console.log(value);

function add(a, b) {
  a = a == null ? 0 : a;
  b = b == null ? 0 : b;
  return a + b;
}

// same
function add(a, b) {
  a = a ?? 0;
  b = b ?? 0;
  return a + b;
}
