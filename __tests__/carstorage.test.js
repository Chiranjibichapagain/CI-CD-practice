'use strict';

const functions = require('../carstorage');

describe('Test if functions are defined', () => {
  test('function getWithLicence is defined', () => {
    expect(functions.getWithLicence).toBeDefined();
  });

  test('function searchWithKeyValue is defined', () => {
    expect(functions.searchWithKeyValue).toBeDefined();
  });
});

describe('Test cars with giving in the licence', () => {
  test('should return a car if licence number exist on db is passed on', () => {
    expect(functions.getWithLicence('xyz-987')).toEqual({
      modal: 'Bored T-Model',
      licence: 'xyz-987',
      type: 'XL',
    });
  });

  test('should throw error if parameters not given', () => {
    expect(() => functions.getWithLicence()).toThrow('licence number missing');
  });

  test('should return undefined if no car found with given number', () => {
    expect(functions.getWithLicence('0876')).toBeNull();
  });
});

describe('Test with giving in key value pair', () => {
  test('Should throw error if both of the parameters is missing', () => {
    expect(() => functions.searchWithKeyValue()).toThrow('parameters missing');
  });

  test('Should throw error if value parameter is missing', () => {
    expect(() => functions.searchWithKeyValue('licence')).toThrow(
      'parameters missing'
    );
  });

  test('Should throw error if key parameter is missing', () => {
    expect(() => functions.searchWithKeyValue('XL')).toThrow(
      'parameters missing'
    );
  });

  test('Should return cars object matching the key value passed in the parameters', () => {
    expect(functions.searchWithKeyValue('type', 'XL')).toEqual([
      { modal: 'Bored T-Model', licence: 'xyz-987', type: 'XL' },
      { modal: 'Bored T-Model', licence: 'ABR-387', type: 'XL' },
    ]);

    expect(functions.searchWithKeyValue('modal', 'Nova')).toEqual([
      { modal: 'Nova', licence: 'ABC-947', type: 'GT' },
      { modal: 'Nova', licence: 'XTR-907', type: 'GTX' },
    ]);

    expect(functions.searchWithKeyValue('licence', 'xyz-987')).toEqual([
      { modal: 'Bored T-Model', licence: 'xyz-987', type: 'XL' },
    ]);
  });

  test('should return empty array if no matching key value is passed', () => {
    expect(functions.searchWithKeyValue('modal', 'bmw')).toEqual([]);
  });
});
