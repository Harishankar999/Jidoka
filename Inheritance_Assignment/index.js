// Show implementation of a class and example of inheritance
// Example: 
class Car {
  constructor(name) {
    this.carName = name;
  }
  carFunc() {
    return "My car name is " + this.carName;
  }
}
class Model extends Car {
  constructor(name, model) {
    super(name);
    this.model = model;
  }
  inheritCar() {
    return this.carFunc() + "Model is :" + this.model;
  }
}

let myCar = new Model("Maruti", "CelerioX");
console.log(myCar);

// Throw an exception, catch and handle the outcomes

// Let's say i am working on a project and  i want to connect my Database.
// then at that time i will use try catch.
// it is for if my something is wrong the it will send me the error message otherwise it will connected successfully.

try {
  setTimeout(function () {
    noSuchVariable; // script will die here
  }, 1000);
} catch (err) {
  alert("won't work");
}
