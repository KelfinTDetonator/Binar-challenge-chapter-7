const response = require('../../utils/response.utils'),
createError = require('http-errors')

module.exports = {
    viewRegister: async (req, res, next) => {
        try {
            res.render('registerForm')
        } catch (error) {
            console.error(error)
            next(error)
        }
    },
    
    viewLogin: async(req, res, next) => {
        try {
            res.render('login')
        } catch (error) {
            console.error(error)
            next(error)
        }
    },

    viewDashboard: async(req, res, next)=>{
        try {
            res.render('index', {title: "Home"})
        } catch (error) {
            next(error)
        }
    },

    viewResetPass: async(req, res, next) => {
        try {
            res.render('resetPass')
        } catch (error) {
            next(error)
        }
    },

    viewSetPass: async(req, res, next) => {
        try {
            res.render('setPass', {token: req.params.token})
        } catch (error) {
            next(error)
        }
    }
}