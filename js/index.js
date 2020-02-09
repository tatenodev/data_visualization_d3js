import { cars } from './cars.js';

const formatCar = car => {
  const {
    year,
    make,
    model,
    price
  } = car ;
  return `${year} ${make}, ${model}, ${price}`;
}
cars
.filter(car => car.price < 2000)
.map(formatCar)
.join('\n');

const message = formatCar(cars[0]);

document.getElementById('message-element').textContent = message;
