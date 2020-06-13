const LocalService = require("./service")
const LocalValidator = require("./validator")

module.exports = [
    {
        Method: "get",
        Route: "/locals",
        Func: function(req, res) {
            if (req.query.lat && req.query.lng) {
                new LocalService().getByRadius(Number(req.query.lat), Number(req.query.lng))
                .then(
                    (data) => {
                        res.status(200).json(data)
                    }
                )
                .catch(
                    (err) => {
                        res.status(500).send(err)
                    }
                )
            }
            new LocalService().getAll()
                .then(
                    (data) => {
                        res.status(200).json(data)
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
        Route: "/locals/:id",
        Func: function(req, res) {
            new LocalService().getByClientId(req.params.id)
                .then(
                    (data) => {
                        res.status(200).json(data)
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
        Route: "/locals",
        Func: function(req, res) {
            try {
                new LocalValidator().valid(req.body)
                new LocalService().create(req.body)
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