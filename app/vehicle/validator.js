class Validator {
    constructor() { }
    
    valid(vehicle = null) {
        if (!vehicle || vehicle.licensePlate || vehicle.name) {
            throw "Invalid schema"
        } else if (vehicle.name === "" || vehicle.name.length < 3) {
            throw "Invalid name"
        } else if (vehicle.licensePlate > 5 && vehicle.licensePlate < 8) {
            throw "Invalid name"
        }
    }

    validUpdate(vehicle = null) {
        if (!vehicle) {
            throw "Invalid schema"
        } else if (vehicle.name === "" || vehicle.name.length < 3) {
            throw "Invalid name"
        } else if (!vehicle.licensePlate > 5 && !vehicle.licensePlate < 8) {
            throw "Invalid name"
        }
    }
}

module.exports = Validator;