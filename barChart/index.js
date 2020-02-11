const svg = d3.select('svg');

const width = +svg.attr('width');
const height = +svg.attr('height');

d3.csv('data/data.csv').then(data => {
  console.log(data);
})
