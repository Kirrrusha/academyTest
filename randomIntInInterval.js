// написать функцию, которая выводит рандомное число в заданном интервале
module.exports = {
  randomInteger: (min, max) => {
    if (!Number.isInteger(min) && !Number.isInteger(min))
      alert('Одно из чисел не Integer');
    return Math.round(min + Math.random() * (max - min));
  }
};
