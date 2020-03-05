
module.exports = function countCats(matrix) {
  return [].concat(...matrix).filter(e => e == "^^").length;
};