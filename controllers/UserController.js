const { User } = require('../models/user')

class UserController{
    static async loginForm(req, res) {
        try {
            res.render('register-form.ejs')
        } catch (err) {
            console.log(err);
            res.send(err.message)
            
        }
    }
    static async registerForm(req, res) {
        try {
            res.render('register-form.ejs')
        } catch (err) {
            console.log(err);
            res.send(err.message)
            
        }
    }
    static async postRegister(req, res) {
        //create user baru yang isinya usernmae, password, dan role.
        try {
            const {email, password, role} = req.body
            await User.create({
                email: email,
                possword: password,
                role: role
            })
            res.redirect('/login')
        } catch (err) {
            console.log(err);
            res.send(err.message)
            
        }
    }
    
}

module.exports = UserController
