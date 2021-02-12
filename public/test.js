const array = [
  ["fish", "cod", "haddock"],
  ["animals", "dog", "cat"],
];



array.map((item) => {
  console.log(item[0]);
  let blue = item.slice(1);
  blue.map((thing) => console.log(thing));
});
