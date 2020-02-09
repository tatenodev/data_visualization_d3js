const carsJSON = `[
  {
    "year": 2000,
    "make": "Honda",
    "model": "Accord",
    "price": 2800
  },
  {
    "year": 2012,
    "make": "Nissan",
    "model": "Leaf",
    "price": 1800
  },
  {
    "year": 2009,
    "make": "Ford",
    "model": "F150",
    "price": 1950
  },
  {
    "year": 2009,
    "make": "Chevrolet",
    "model": "Trailvlazer",
    "price": 1550
  },
  {
    "year": 2003,
    "make": "Honda",
    "model": "Pilot",
    "price": 2200
  }
]`;
const cars = JSON.parse(carsJSON);

export const getCars = ()=> new Promise(resolve => {
  setTimeout(() => resolve(cars), 2000);
});
