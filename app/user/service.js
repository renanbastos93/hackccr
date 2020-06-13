const UserModel = require("./../../models/user")
const bcrypt = require("bcryptjs")

class UserService {
    constructor(){
        this.ignoreFields = {password: 0, _id: 0}
    }
    getAll() {
        return UserModel.find({}, this.ignoreFields).exec()
    }
    getByClientId(id) {
        return UserModel.findOne({clientId: id}, this.ignoreFields).exec()
    }
    create(user) {
        user.clientId = Math.random().toString(36).substr(3, 11);
        user.password = bcrypt.hashSync(user.password, 13)
        return (new UserModel(user)).save()
    }
    async update(id, user) {
        if (user.password) {
            user.password = bcrypt.hashSync(user.password, 13)
        }
        let up = await UserModel.updateOne({clientId: id}, {$set: user}).exec();
        if (up.ok == 1) {
            return await this.getByClientId(id)
        }
        return null
    }
}

module.exports = UserService