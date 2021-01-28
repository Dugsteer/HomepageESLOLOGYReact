// const square = function (x) {
//   return x * x;
// };

// const squareArrow = (x) => x * x;

// console.log(squareArrow(6));

const fullName = "Dugald Steer";
const getFirstName = (name) => (fullName ? fullName.split(" ")[0] : false);
console.log(getFirstName(fullName));
