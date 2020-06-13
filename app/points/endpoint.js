const PointService = require("./service")
const PointValidator = require("./validator")

module.exports = [
    {
        Method: "get",
        Route: "/points/:clientId",
        Func: function(req, res) {
            new PointService().get(req.params.clientId)
                .then(
                    (data) => {
                        res.status(200).json({
                            "clientId": data.clientId,
                            "qtd": data.qtd,
                            "points":  {
                                "qtd": data.points.qtd,
                                "action": data.points.action
                            }
                        })
                    }
                )
                .catch(
                    (err) => {
                        res.status(500).send(err)
                    }
                )
        }
    },
    {
        Method: "get",
        Route: "/points/used/:clientId",
        Func: function(req, res) {
            new PointService().get(req.params.clientId)
                .then(
                    (data) => {
                        res.status(200).json({
                            "clientId": data.clientId,
                            "qtd": data.qtd,
                            "points":  {
                                "qtd": data.points.qtd,
                                "used": data.points.used
                            }
                        })
                    }
                )
                .catch(
                    (err) => {
                        res.status(500).send(err)
                    }
                )
        }
    },
    {
        Method: "post",
        Route: "/points/:clientId",
        Func: function(req, res) {
            try {
                new PointValidator().validAction(req.body)
                new PointService().findUpdateAction(req.params.clientId, req.body)
                    .then(
                        (data) => {
                            res.status(201).json(data)
                        }
                    )
                    .catch(
                        (err) => {
                            res.status(500).send(err)
                        }
                    )
            } catch(err) {
                return res.status(400).send(err)
            }
        }
    },
    {
        Method: "post",
        Route: "/points/used/:clientId",
        Func: function(req, res) {
            try {
                new PointValidator().validUse(req.body)
                new PointService().findUpdateUsed(req.params.clientId, req.body)
                    .then(
                        (data) => {
                            res.status(201).json(data)
                        }
                    )
                    .catch(
                        (err) => {
                            res.status(500).send(err)
                        }
                    )
            } catch(err) {
                return res.status(400).send(err)
            }
        }
    },
]
