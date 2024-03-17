class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        return "Beep.";
    }

    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
}

class Car extends Vehicle {
    constructor (make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle {
    constructor (make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }
    
    revEngine() {
        return "VROOM!!!";
    }
}

class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }

    add(newVehicle) {
        let isNotFull = this.vehicles.length < this.capacity;
        let isVehicle = newVehicle instanceof Vehicle;
        let canAdd = isNotFull && isVehicle;

        if (canAdd) {
            this.vehicles.push(newVehicle);
            return "Vehicle has been added!";
        } else {
            if (!isVehicle) {
                return "Only vehicles are allowed in here!";
            }
            if (!isNotFull) {
                return "Sorry, we’re full.";
            }
        }
    }
}