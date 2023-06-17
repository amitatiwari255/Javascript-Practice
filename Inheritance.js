
class Shape {
  constructor(color) {
    this.color = color;
  }

  getColor() {
    return this.color;
  }
}
class Circle extends Shape {
  constructor(radius, color) {
    super(color);
    this.radius = radius;
  }

  getRadius() {
    return this.radius;
  }
}

// Creating an instance of the child class
const myCircle = new Circle(5, 'red');

console.log(myCircle.getColor());   
console.log(myCircle.getRadius());  