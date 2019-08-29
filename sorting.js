// Отсортировать данный массив имён по алфавиту

module.exports = {
  sortName: function(arr) {
    return arr.sort((a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
  }
};
