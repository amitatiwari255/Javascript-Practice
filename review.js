class Shape{
        constructor() {
        }
      
        area() {
          
        }
      }
      
      class Rectangle extends Shape {
        constructor(length, width) {
          super();
          this.length = length;
          this.width = width;
        }
      
        area() {
          return this.length * this.width;
        }
      }
      
      class Square extends Shape {
        constructor(side) {
          super();
          this.side = side;
        }
      
        area() {
          return this.side * this.side;
        }
      }
      
      const rectangle = new Rectangle(5, 10);
      console.log('Rectangle area:', rectangle.area());
      
      const square = new Square(5);
      console.log('Square area:', square.area());
      