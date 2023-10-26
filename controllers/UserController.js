const {User, Profile} = require('../models')


class UserController{
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
            const { email, password, fullName, phoneNumber, address, } = req.body
            // console.log(User);
            let UserCreate = await User.create({
                email,
                password,
                role: "user"
            })
            // console.log(UserCreate.id);
            let ProfileCreate = await Profile.create({
                fullName,
                phoneNumber,
                address,
                UserId: UserCreate.id
            })
            res.redirect('/login')
        } catch (err) {
            console.log(err);
            res.send(err.message)
        }
    }
    
}

module.exports = UserController
