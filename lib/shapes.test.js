/*

test the shapes returning SVG code, test will pass if shape classes return code as expected
run 'npx test' from this same directory (/lib)
Jest Installation: 'npm install --save-dev jest'

Then, in your "package.json" file, add the following line under the "scripts" section:

"test": "jest"

`This will allow you to run Jest by simply typing npm test in your terminal.`

-npm test

 PASS  lib/shapes.test.js
  Square
    √ draw() returns correct SVG code (1 ms)                                                                                                                                                                                             
  Circle                                                                                                                                                                                                                                 
    √ draw() returns correct SVG code                                                                                                                                                                                                    
  Triangle                                                                                                                                                                                                                               
    √ draw() returns correct SVG code (1 ms)                                                                                                                                                                                             
                                                                                                                                                                                                                                         
Test Suites: 1 passed, 1 total                                                                                                                                                                                                           
Tests:       3 passed, 3 total                                                                                                                                                                                                           
Snapshots:   0 total
Time:        0.624 s
Ran all test suites.

*/


const { Square, Circle, Triangle } = require('./shapes.js');

describe('Square', () => {
  test('draw() returns correct SVG code', () => {
    const mySquare = new Square(10, 10, 50, 'red');
    expect(mySquare.draw()).toBe('<rect x="10" y="10" width="50" height="50" fill="red"/>');
  });
});

describe('Circle', () => {
  test('draw() returns correct SVG code', () => {
    const myCircle = new Circle(100, 100, 30, 'blue');
    expect(myCircle.draw()).toBe('<circle cx="100" cy="100" r="30" fill="blue"/>');
  });
});

describe('Triangle', () => {
  test('draw() returns correct SVG code', () => {
    const myTriangle = new Triangle(50, 50, 100, 50, 75, 100, 'green');
    expect(myTriangle.draw()).toBe('<polygon points="50,50 100,50 75,100" fill="green"/>');
  });
});
