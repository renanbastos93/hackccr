const UserModel = require("./../../models/user")

class UserService {
    constructor(){}
    getAll() {
        return UserModel.find({}).exec()
    }
}

module.exports = UserService