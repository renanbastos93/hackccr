const VehicleService = require("./service")
const VehicleValidator = require("./validator")

module.exports = [   
    {
        Method: "get",
        Route: "/vehicles/:id",
        Func: function(req, res) {         
            new VehicleService().getByLicensePlate(req.params.id)
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
        Route: "/vehicles/client/:id",
        Func: function(req, res) {
            new VehicleService().getByClientId(req.params.id)              
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
        Route: "/vehicles",
        Func: function(req, res) {
            try {
                new VehicleValidator().valid(req.body)
                new VehicleService().create(req.body)
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
                res.status(400).send(err)
            }
        }
    },

    {
        Method: "put",
        Route: "/vehicles/:id",
        Func: function(req, res) {
            try {
                new VehicleValidator().validUpdate(req.body)
                new VehicleService().update(req.params.id, req.body)
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
                res.status(400).send(err)
            }
        }
    },
] 