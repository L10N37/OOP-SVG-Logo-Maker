// required shape classes

// Shape is the parent class with common properties shared amongst all shapes
// the shapes inherit these properties
class Shape {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }
}

class Square extends Shape {
  constructor(x, y, size, color) {
    super(x, y, color);
    this.size = size;
  }

  draw() {
    return `<rect x="${this.x}" y="${this.y}" width="${this.size}" height="${this.size}" fill="${this.color}"/>`;
  }
}

class Circle extends Shape {
  constructor(x, y, radius, color) {
    super(x, y, color);
    this.radius = radius;
  }

  draw() {
    return `<circle cx="${this.x}" cy="${this.y}" r="${this.radius}" fill="${this.color}"/>`;
  }
}

class Triangle extends Shape {
  constructor(x1, y1, x2, y2, x3, y3, color) {
    super(x1, y1, color);
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3 = y3;
  }

  draw() {
    return `<polygon points="${this.x1},${this.y1} ${this.x2},${this.y2} ${this.x3},${this.y3}" fill="${this.color}"/>`;
  }
}

// export for use in other files in the project
module.exports = { Shape, Square, Circle, Triangle };
