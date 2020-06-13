const VehicleService = require("./service")
const VehicleValidator = require("./validator")

module.exports = [   
    {
        Method: "get",
        Route: "/vehicles/:id",
        Func: function(req, res) {         
            return new VehicleService().getByLicensePlate(req.params.id)
                .then(
                    (data) => {
                        return res.status(200).json(data)
                    }
                )
                .catch(
                    (err) => {
                        return res.status(500).send(err)
                    }
                )
        }
    },
    {
        Method: "get",
        Route: "/client/:id/vehicles",
        Func: function(req, res) {
            return new VehicleService().getByClientId(req.params.id)              
              .then(
                    (data) => {
                        return res.status(200).json(data)
                    }
                )
                .catch(
                    (err) => {
                        return res.status(500).send(err)
                    }
                )
        }
    },
    {
        Method: "post",
        Route: "/vehicles",
        Func: function(req, res) {
            try {
                new VehicleValidator().valid(req.body)
                return new VehicleService().create(req.body)
                    .then(
                        (data) => {
                            return retres.status(201).json(data)
                        }
                    )
                    .catch(
                        (err) => {
                            return res.status(500).send(err)
                        }
                    )
            } catch(err) {
                return res.status(400).send(err)
            }
        }
    },
    {
        Method: "put",
        Route: "/vehicles/:id",
        Func: function(req, res) {
            try {
                new VehicleValidator().validUpdate(req.body)
                return new VehicleService().update(req.params.id, req.body)
                    .then(
                        (data) => {
                            return retres.status(200).json(data)
                        }
                    )
                    .catch(
                        (err) => {
                            return res.status(500).send(err)
                        }
                    )
            } catch(err) {
                return res.status(400).send(err)
            }
        }
    },
] 