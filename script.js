function _load() {
  /*   class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age() {
      let date = new Date();
      return date.getFullYear() - this.year;
    }
    isOld() {
      return `This is ${this.age() < 10 ? "a new" : "an old"} car.`;
    }
  }

  let myCar = new Car("Ford", 2014);
  document.getElementById(
    "root"
  ).innerHTML = `My car is ${myCar.age()} years old. ${myCar.isOld()}`; */

  function Car(name, year) {
    this.name = name;
    this.year = year;
    this.age = function () {
      let date = new Date();
      return date.getFullYear() - this.year;
    };
  }

  Car.prototype.isOld = function () {
    return `This is ${this.age() < 10 ? "a new" : "an old"} car.`;
  };

  let myCar = new Car("Ford", 2014);
  document.getElementById(
    "root"
  ).innerHTML = `My car is ${myCar.age()} years old. ${myCar.isOld()}`;

  /*   const car = (name, year) => {
    return {
      name: name,
      year: year,
      age: (year) => {
        let date = new Date();
        return date.getFullYear() - year;
      },
    };
  };

  document.getElementById("root").innerHTML = `My car is a ${car(
    "Ford",
    2014
  )} ${car("Ford", 2014).age()} years old.`; */
}
window.addEventListener("load", _load);
