function getAverage() {
  const obj = { x: 3.6, y: 7.8, z: 4.3 };
  const { x, y, z } = obj;
  return Math.floor((x + y + z) / 3);
  // return Math.floor((obj.x + obj.y + obj.z) / 3.0)
}
// console.log(getAverage());

function getAvgTemp() {
  const weather = {
    location: "Toronto",
    unit: "Celsius",
    today: { max: 2.6, min: -6.3 },
    tomorrow: { max: 3.2, min: -5.8 },
  };
  const {
    unit,
    today: { max: maxToday, min: minToday },
    tomorrow: { max: maxTomorrow, min: minTomorrow },
  } = weather;

  return {
    max: (maxToday + maxTomorrow) / 2.0,
    min: (minToday + minTomorrow) / 2.0,
    unit: unit,
  };
}
// console.log(getAvgTemp());

function getFirstTwo() {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7];
  const [firstItem, secondItem] = arr;
  return {
    firstItem: firstItem,
    secondItem: secondItem,
  };
}
// console.log(getFirstTwo());

function getElements() {
  // returns 1st, 2nd and last element from an array
  // refactor with skipped destructuring for arrays
  const arr = [0, 1, 2, 3, 4, 5, 6, 7];
  const [first, second, , , fifth] = arr;

  return {
    first: first,
    second: second,
    fifth: fifth,
  };
}
// console.log(getElements());

function getSecondItem() {
  // refactor with nested destructuring of arrays
  const food = [
    ["carrots", "beans", "peas", "lettuce"],
    ["apple", "mango", "orange"],
    ["cookies", "cake", "pizza", "chocolate"],
  ];
  const [[, firstItem], [, secondItem], [, thirdItem]] = food;

  return {
    first: firstItem,
    second: secondItem,
    third: thirdItem,
  };
}
// console.log(getSecondItem());

function nestedArrayAndObjectSOLUTION() {
  const info = {
    title: "Once Upon a Time",
    protagonist: {
      name: "Emma Swan",
      enemies: [
        { name: "Regina Mills", title: "Evil Queen" },
        { name: "Cora Mills", title: "Queen of Hearts" },
        { name: "Peter Pan", title: `The boy who wouldn't grow up` },
        { name: "Zelena", title: "The Wicked Witch" },
      ],
    },
  };
  const {
    title,
    protagonist: {
      name: protagonistName,
      enemies: [, , , { title: enemyTitle, name: enemyName }],
    },
  } = info;
  return `${enemyName} (${enemyTitle}) is an enemy to ${protagonistName} in "${title}"`;
}
// console.log(nestedArrayAndObjectSOLUTION())

function defaultValues() {
  const bench = { type: "Piano", adjustable: false };
  const legCount = bench.legs ?? getDefaultLegCount();
  return legCount;

  function getDefaultLegCount() {
    return 4;
  }
}
// console.log(defaultValues());

function ontoAnObject() {
  // refactor this to destructuring
  const array = [1, 2, 3, 4, 5, 6];
  const object = {};
  [object.one, object.two, object.three, ...object.rest] = array;
  return object;
}
console.log(ontoAnObject());
