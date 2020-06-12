const UserService = require("./service")

module.exports = [
    {
        Method: "get",
        Route: "/",
        Func: function(_, res) {
            new UserService().getAll()
                .then(
                    (data) => {
                        res.status(200).send(data)
                    }
                )
                .catch(
                    (err) => {
                        res.status(500).send(err)
                    }
                )
        }
    },
    // other routes
]