// required shape classes

class Square {
    constructor(x, y, size, color) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.color = color;
    }
  
    draw() {
      return `<rect x="${this.x}" y="${this.y}" width="${this.size}" height="${this.size}" fill="${this.color}"/>`;
    }
  }
  
  class Circle {
    constructor(x, y, radius, color) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
    }
  
    draw() {
      return `<circle cx="${this.x}" cy="${this.y}" r="${this.radius}" fill="${this.color}"/>`;
    }
  }
  
  class Triangle {
    constructor(x1, y1, x2, y2, x3, y3, color) {
      this.x1 = x1;
      this.y1 = y1;
      this.x2 = x2;
      this.y2 = y2;
      this.x3 = x3;
      this.y3 = y3;
      this.color = color;
    }
  
    draw() {
      return `<polygon points="${this.x1},${this.y1} ${this.x2},${this.y2} ${this.x3},${this.y3}" fill="${this.color}"/>`;
    }
  }
  
  // export for use in other files in the project
  module.exports = { Square, Circle, Triangle };
  