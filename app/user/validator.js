class Validator {
    constructor(){}
    valid(user=null) {
        if (!user) {
            throw "Invalid schema"
        } else if (!user.name || !user.phone || !user.password) {
            throw "Invalid Values"
        } else if (user.name === "" || user.name.length < 3) {
            throw "Invalid name"
        } else if (String(user.phone).length != 11) {
            throw "Invalid phone"
        } else if (user.password.length < 6 || user.password.length > 12) {
            throw "Invalid password please put on 6 chars until 12"
        }
    }
    validUpdate(user=null) {
        if (user.clientId) {
            delete user.clientId
        }
        if (!user) {
            throw "Invalid schema"
        } else if (user.name && user.name === "") {
            throw "Invalid name"
        } else if (user.phone && String(user.phone).length != 11) {
            throw "Invalid name"
        } else if (user.password) {
            if (user.password.length < 6 || user.password.length > 12) {
                throw "Invalid name"
            }
        }
    }
}

module.exports = Validator;