const randomFromArray = function (array) {
  return array[Math.floor((Math.random() * array.length))];
};

module.exports = {
  randomFromArray
}