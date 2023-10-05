// 28. Create a constructor function that satisfies the following conditions:
// The name of the constructor function should be Car.
// It should take three parameters: name, mileage and max_speed.
// Store these parameter values in their respective thiskeywords: this.name, this.mileage and
// this.max_speed.

// Constructor function for Car
function Car(name, mileage, maxspeed) {
    this.name = name;
    this.mileage = mileage;
    this.maxspeed = maxspeed;
}


 newCar = new Car("Swift", 30, 120);


console.log(`car name ${newCar.name}`);
console.log(`mileage ${newCar.mileage}`);
console.log(`maximum speed ${newCar.maxspeed}`);

