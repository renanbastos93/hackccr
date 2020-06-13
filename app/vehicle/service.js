const VehicleModel = require("./../../models/vehicle")

class VehicleService {

    constructor(){
        this.ignoreFields = {_id: 0}
    }
     
    getByClientId(id) {        
        return VehicleModel.findOne({clientId: id}, this.ignoreFields).exec()
    }

    getByLicensePlate(id){
        return VehicleModel.findOne({licensePlate: id}, this.ignoreFields).exec()
    }

    create(vehicle) {
        return (new VehicleModel(vehicle)).save()
    }

    async update(id, vehicle) {         
        let up = await VehicleModel.updateOne({clientId: id}, {$set: vehicle}).exec();
        if (up.ok == 1) {
            return await this.getByClientId(id)
        }        
        return null
    }
}

module.exports = VehicleService
