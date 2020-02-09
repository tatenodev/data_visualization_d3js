import { getCars } from './getCars.js';
import { generateReport } from './generateReport.js';

document.getElementById('message-element').textContent = 'loading...';

getCars().then(cars => {
  const message = generateReport(cars, 2000);
  document.getElementById('message-element').textContent = message;
});
