import { cars } from './cars.js';
import { formatCar } from './formatCar.js';

const generateReport = (cars, maxPrice) =>
  cars
    .filter(car => car.price < maxPrice)
    .map(formatCar)
    .join('\n');

const message = generateReport(cars, 2000);

document.getElementById('message-element').textContent = message;
