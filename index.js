// Import shape classes
const { Square, Circle, Triangle } = require('./shapes.js');

const mySquare = new Square(10, 10, 50, 'red');
const myCircle = new Circle(100, 100, 30, 'blue');
const myTriangle = new Triangle(50, 50, 100, 50, 75, 100, 'green');

const svg = `
  <svg width="200" height="200">
    ${mySquare.draw()}
    ${myCircle.draw()}
    ${myTriangle.draw()}
  </svg>
`;

console.log(svg);
