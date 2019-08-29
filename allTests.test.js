const sorting = require('./sorting.js');
const rounding = require('./rounding.js');
const declensions = require('./declensions.js');
const date = require('./date.js');
const randomIntInInterval = require('./randomIntInInterval.js');

describe('Sorting task', () => {
  it('should be valid', () => {
    expect(
      sorting.sortName(['John', 'Jack', 'Jo', 'Kate', 'Low', 'Kirill'])
    ).toStrictEqual(['Jack', 'Jo', 'John', 'Kate', 'Kirill', 'Low']);
  });
});

describe('Rounding task', () => {
  it('should be valid', () => {
    expect(
      rounding.roudingNumber(10.4566, 2)
    ).toBe(10.46);
  });
});

describe('Declensions', () => {
  it('should be valid', () => {
    expect(
      declensions.declOfNum(10, ['место','места','мест'])
    ).toBe('10 мест');
  });
});

describe('Comparison date and parse them', () => {
  it('should be valid', () => {
    expect(
      date.comparisonDates('1.02.2019', '3.08.2019')
    ).toBe('Между 1 февраля и 3 августа - 183 дня');
  });
});

const mockMath = Object.create(global.Math);
mockMath.random = () => 0.5;
global.Math = mockMath;

describe('Random Integer', () => {
  it('should be valid', () => {
    expect(
      randomIntInInterval.randomInteger(10, 20)
    ).toBe(15);
  });
});
