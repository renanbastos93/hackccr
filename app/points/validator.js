class Validator {
    constructor(){}
    validAction(action=null) {
        if (!action || !action.how || !action.qtd) {
            throw "Invalid schema"
        }
    }
    validUse(action=null) {
        if (!action || !action.for || !action.qtd) {
            throw "Invalid schema"
        }
    }
}

module.exports = Validator;