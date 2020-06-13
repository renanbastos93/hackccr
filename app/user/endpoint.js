const UserService = require("./service")
const UserValidator = require("./validator")

module.exports = [
    {
        Method: "get",
        Route: "/users",
        Func: function(_, res) {
            new UserService().getAll()
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
        Route: "/users/:id",
        Func: function(req, res) {
            new UserService().getByClientId(req.params.id)
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
        Route: "/users",
        Func: function(req, res) {
            try {
                new UserValidator().valid(req.body)
                new UserService().create(req.body)
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
        Method: "put",
        Route: "/users/:id",
        Func: function(req, res) {
            try {
                new UserValidator().validUpdate(req.body)
                new UserService().update(req.params.id, req.body)
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
            } catch(err) {
                return res.status(400).send(err)
            }
        }
    },
]