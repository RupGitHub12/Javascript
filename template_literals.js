function interpolation() {
  const greeting = "Hello";
  const noun = "World";
  return `${greeting.toUpperCase()}, ${noun} !`;
}
// console.log(interpolation());

function multiline() {
  // refactor to a single template literal with multiple lines
  return `\n    this is on a new line \n `;
}
// console.log(multiline());

function escaping() {
  // refactor to a single template literal with multiple lines
  return `This is \`code\`\nand a new line`;
}
// console.log(escaping());
