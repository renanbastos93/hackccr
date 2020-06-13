class Validator {
    constructor(){}
    valid(local=null) {
        if (
            !local ||
            !local.name ||
            !local.lat ||
            !local.lng ||
            !local.place_id ||
            !local.types
        ) {
            throw "Invalid schema"
        }
    }
}

module.exports = Validator;