# Carstorage API

Carstorage module is `carstorage.js`
Module exports 2 functions: `getWithLicence` and `search`

Data is stored in a `cars.json` file.

## cars.json

```Json
[
    {"modal":"Bored T-Model", "licence":"xyz-987", "type":"XL"}
    {"modal":"Nova", "licence":"ABC-947", "type":"GT"}
    {"modal":"Bored T-Model", "licence":"ABR-387", "type":"XL"}
    {"modal":"Nova", "licence":"XTR-907", "type":"GTX"}
]
```

## Functions

### **getWithLicence(licence)**

returns a car with the given licence number. Licence number is unique.

Parameter:
`licence`: licence number.
No parameter give: should throw and exception `licence number missing`

Function returns

- if the car is found, function returnsthe car object
- otherwise, function returns `null`

### **search(key, value)**

Function returns all cars with matches the given (key, value) pair.

parameters:
`Key`: search criterion. valid keys are `model`, `licence`, `type `value`:value to be searched

if one or both parameters are missing, function throws and exception : `parameters missing`
if the key is not valid, function throws and exception : `key not found`

Function returns:

- if key and value are valid returns all cars matching given parameters
- otherwise, an empty array is returned.
