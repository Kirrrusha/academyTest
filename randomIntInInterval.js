// написать функцию, которая выводит рандомное число в заданном интервале
module.exports = {
  randomNumber: (min, max) => {
    return Math.round(min + Math.random() * (max - min));
  }
};
