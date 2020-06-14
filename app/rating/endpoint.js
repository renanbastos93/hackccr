const RatingService = require("./service")
const RatingValidator = require("./validator")

module.exports = [

    {
        Method: "get",
        Route: "/rating",
        Func: function (req, res) {
            new RatingService().getAll(req.params.id)
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
        Route: "/rating/:id",
        Func: function (req, res) {
            new RatingService().getByRatingId(req.params.id)
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
        Route: "/rating/client/:id",
        Func: function (req, res) {
            new RatingService().getByClientId(req.params.id)
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
        Route: "/rating/place/:id",
        Func: function (req, res) {
            new RatingService().getByPlaceId(req.params.id)
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
        Route: "/rating/client/:user/place/:place",
        Func: function (req, res) {
            new RatingService().getByPlaceIdAndClientId(req.params)
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
        Route: "/rating",
        Func: function (req, res) {
            try {
                new RatingValidator().valid(req.body)
                new RatingService().create(req.body)
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
            } catch (err) {
                res.status(400).send(err)
            }
        }
    },

    {
        Method: "put",
        Route: "/rating/:id",
        Func: function (req, res) {
            try {
                new RatingValidator().validUpdate(req.body)
                new RatingService().update(req.params.id, req.body)
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
            } catch (err) {
                res.status(400).send(err)
            }
        }
    },
] 