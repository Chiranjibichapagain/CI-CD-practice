'use strict';
const cars = require('./cars.json');

exports.getWithLicence = (plate) => {
  if (plate) {
    return cars.find((car) => car.licence === plate) || null;
  }

  if (plate == undefined) {
    throw new Error('licence number missing');
  }
};

exports.searchWithKeyValue = (key, value) => {
  if (key == undefined || value == undefined) {
    throw new Error('parameters missing');
  }

  return cars.filter((car) => car[key] === value);
};
