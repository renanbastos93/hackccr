class Validator {
    constructor() {
        this.ignoreFields = { _id: 0 }
    }

    valid(rating = null) {
        if (!rating || !rating.clientId) {
            throw "Invalid schema"
        }
        else if( !rating.place ||!rating.place.id || !rating.place.name ){
            throw "Invalid schema"
        }
    }

    validUpdate(rating = null) {
        if (!rating) {
            throw "Invalid schema"
        }
    }
}

module.exports = Validator;
