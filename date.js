// Написать функцию, которая сравнивает 2 даты, выводит результат в формате "Между 1 сентября 2019г и 3 сентября 2019г - 2 дня", входной параметр дат - "DD.MM.YYYY", 
const declensions = require('./declensions.js');

module.exports = {
    comparisonDates: (firstDate, secondDate) => {
        const first = new Date(firstDate.split('.')[2], +firstDate.split('.')[1] - 1, firstDate.split('.')[0]);
        const second = new Date(secondDate.split('.')[2], +secondDate.split('.')[1] - 1, secondDate.split('.')[0]);
        const start = first.getTime() - second.getTime() < 0 ? first : second;
        const end = second.getTime() - second.getTime() > 0 ? first : second;
        const monthA = 'января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря'.split(',');
        const daysLag = Math.ceil(Math.abs(start.getTime() - end.getTime()) / (1000 * 3600 * 24));
        return `Между ${start.getDate()} ${monthA[start.getMonth()]} и ${end.getDate()} ${monthA[end.getMonth()]} - ${declensions.declOfNum(daysLag, ['день', 'дня', 'дней'])}`
    }
  };
  