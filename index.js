class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    get diameter() {
      return this.radius * 2;
    }
  
    set diameter(value) {
      this.radius = value / 2;
    }
  
    get circumference() {
      return Math.PI * this.diameter;
    }
  
    set circumference(value) {
      this.radius = value / (2 * Math.PI);
    }
  
    get area() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  
    set area(value) {
      this.radius = Math.sqrt(value / Math.PI);
    }
  }
  
  // Create an instance of Circle
  const circle = new Circle(5);
  
  // Access and calculate properties
  console.log(circle.radius); // Output: 5
  console.log(circle.diameter); // Output: 10
  console.log(circle.circumference.toFixed(2)); // Output: 31.42
  console.log(circle.area.toFixed(2)); // Output: 78.54
  
  // Set properties
  circle.diameter = 12;
  console.log(circle.radius); // Output: 6
  console.log(circle.circumference.toFixed(2)); // Output: 37.70
  
  circle.area = 100;
  console.log(circle.radius.toFixed(2)); // Output: 5.64
  console.log(circle.diameter.toFixed(2)); // Output: 11.28
  
