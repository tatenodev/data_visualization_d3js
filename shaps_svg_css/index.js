const svg = d3.select('svg');

const width = +svg.attr('width');
const height = +svg.attr('height');

const g = svg.append('g')
  .attr('transform', `translate(${width/2},${height/2})`);

const circle = g.append('circle')
  .attr('r', height / 2)
  .attr('fill', 'yellow')
  .attr('stroke', 'black');

const eyeSpacing = 100;
const eyeYOffset = -70;

const leftEye = svg.append('circle')
.attr('r', 30)
.attr('cx', width / 2 - eyeSpacing)
.attr('cy', 500/2 + eyeYOffset)
.attr('fill', 'yellow')
.attr('fill', 'black');

const rightEye = svg.append('circle')
.attr('r', 30)
.attr('cx', width / 2 + eyeSpacing)
.attr('cy', 500/2 + eyeYOffset)
.attr('fill', 'yellow')
.attr('fill', 'black');

const mouth = g.append('path')
  .attr('d', d3.arc()({
    innerRadius: 150,
    outerRadius: 170,
    startAngle: Math.PI / 2,
    endAngle: Math.PI * 3/2
  }));