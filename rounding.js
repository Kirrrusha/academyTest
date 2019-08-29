// Написать функцию округления чисел, которая принимает 2 параметра, само число и количество знаков после запятой

module.exports = {
  roudingNumber: function(roundNum, roundLength) {
    return (
      Math.round(roundNum * Math.pow(10, roundLength)) /
      Math.pow(10, roundLength)
    );
  }
};
