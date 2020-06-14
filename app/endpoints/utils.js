var differenceInDays = require('date-fns/differenceInDays')
var jwt = require('jsonwebtoken');
const secret = "itsbina";

const ignoreAuthPath = ["/api/login", "/api/users"]

function createToken(id) {
    return jwt.sign({ id }, secret, { 
        expiresIn: "7d"
    }); 
}

function renewToken(req, res) {
    var token = req.headers['authorization'] || req.headers['Authorization']
    if (!token) {
        return res.status(401).send({ isValid: false, message: 'Token não informado.' }); 
    }

    jwt.verify(token, secret, function(err, decoded) {
        if (err) {
            return res.status(200).send({ isValid: false }); 
        }
        let diffDay = differenceInDays(new Date(decoded.exp*1000), new Date())
        if (diffDay > 0 && diffDay <= 7) {
            return res.status(201).json({
                isValid: true,
                newToken: createToken(decoded.id)
            })
        }
        return res.status(200).json({
            isValid: true,
        })
    })
}

function verifyToken(req, res, next){
    if (req.method === "POST" && ignoreAuthPath.includes(req.originalUrl) === true) {
        return next()
    }
    var token = req.headers['authorization'] || req.headers['Authorization']
    if (!token) {
        return res.status(401).send({ isValid: false, message: 'Token não informado.' }); 
    }
    jwt.verify(token, secret, function(err, decoded) { 
        if (err) {
            return res.status(500).send({ isValid: false, message: 'Token inválido.' }); 
        }
        next(); 
    }); 
}

module.exports = {createToken, verifyToken, renewToken}