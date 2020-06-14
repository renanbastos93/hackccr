const RatingModel = require("./../../models/rating")

class RatingService {

    constructor(){
        this.ignoreFields = {_id: 0}
    }

    getByRatingId(id){
        return RatingModel.find({ratingId: id}, this.ignoreFields).exec()
    }

    getAll() {
        return RatingModel.find({}, this.ignoreFields).exec()
    }
     
    getByClientId(id) {        
        return RatingModel.find({clientId: id}, this.ignoreFields).exec()
    }

    getByPlaceId(id){
        return RatingModel.find({"place.id": id}, this.ignoreFields).exec()
    }

    getByPlaceIdAndClientId(param){
        return RatingModel.find({"place.id": param.place, clientId:param.user}, this.ignoreFields).exec()
    }

    create(rating) {
        rating.ratingId = Math.random().toString(31).substr(2, 8);
        return (new RatingModel(rating)).save()
    }

    async update(id, rating) {         
        let up = await RatingModel.updateOne({ratingId: id}, {$set: rating}).exec();
        if (up.ok == 1) {
            return await this.getByRatingId(id)
        }        
        return null
    }
}

module.exports = RatingService