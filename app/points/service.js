const PointModel = require("./../../models/points")

class PointService {
    constructor(){
        this.ignoreFields = {_id: 0}
    }
    get(id) {
        return PointModel.findOne({clientId: id}, this.ignoreFields).exec()
    }
    async findUpdateAction(id, point) {
        try {
            let currentPoint = await PointModel.findOne({clientId: id}).exec()
            if (!currentPoint) {
                return await (new PointModel({
                    clientId: id,
                    points: {
                        qtd: point.qtd,
                        action: [
                            {
                                qtd: point.qtd,
                                when: new Date(),
                                how: point.how
                            }
                        ],
                        used: []
                    },
                })).save()
            }
            currentPoint.points.qtd += point.qtd
            currentPoint.points.action.push({
                qtd: point.qtd,
                when: new Date(),
                how: point.how
            })
            return await currentPoint.save()
        } catch(err) {
           throw err
        }
    }
    async findUpdateUsed(id, point) {
        try {
            let currentPoint = await PointModel.findOne({clientId: id}).exec()
            if (!currentPoint) {
                return await (new PointModel({
                    clientId: id,
                    points: {
                        qtd: 0,
                        action: [],
                        used: [
                            {
                                qtd: point.qtd,
                                for: point.for
                            }
                        ]
                    },
                })).save()
            }
            currentPoint.points.qtd -= point.qtd
            currentPoint.points.used.push({
                qtd: point.qtd,
                for: point.for
            })
            return await currentPoint.save()
        } catch(err) {
            console.log( "err: " , err)
           throw err
        }
    }
}

module.exports = PointService