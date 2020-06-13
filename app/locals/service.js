const LocalModel = require("./../../models/local")
const bcrypt = require("bcryptjs")

class LocalService {
    constructor(){
        this.ignoreFields = {_id: 0, location: 0}
    }
    getAll() {
        return LocalModel.find({}, this.ignoreFields).exec()
    }
    getByRadius(lat, lang) {
        return LocalModel.find({
            location: {
                $near: {
                  $maxDistance: 3000,
                  $geometry: {
                    type: "Point",
                    coordinates: [lat, lang]
                  }
                }
              }
        }, this.ignoreFields).exec()
    }
    getByClientId(id) {
        return LocalModel.findOne({place_id: id}, this.ignoreFields).exec()
    }
    create(local) {
        local.location = {
            type: "Point",
            coordinates: [local.lat, local.lng]
        }
        return (new LocalModel(local)).save()
    }
}

module.exports = LocalService