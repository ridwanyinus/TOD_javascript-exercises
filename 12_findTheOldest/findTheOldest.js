const findTheOldest = function (array) {
  const d = new Date();
  let year = d.getFullYear();
  const maxAge = Math.max(...array.map((item) => (item.yearOfDeath || year) - item.yearOfBirth));
  return array.find((item) => (item.yearOfDeath || year) - item.yearOfBirth === maxAge);
};

// Do not edit below this line
module.exports = findTheOldest;
