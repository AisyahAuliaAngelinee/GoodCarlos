const { comparePassword } = require('../helpers/bcryptjs');
const { User, Profile } = require('../models')

class formLogin{
    static async loginForm(req, res) {
        try {
            if (req.session.UserId) {
                res.redirect('/')
            }
            const { error } = req.query
            res.render("login-form", {error})
        } catch (err) {
            console.log(err);
            res.send(err.message)
            
        }
    }
    
    static async postLogin(req, res) {
        try {
            
            const { email, password } = req.body
            const user = await User.findOne({ where: { email } })
            // console.log('masuk');
           
            if(user) {
                const isValid = comparePassword(password, user.password)
                if (isValid) { //! case berhasil login]
                    req.session.UserId = user.id
                    // console.log(user, 'ini user');
                    // console.log(req.session, 'ini reqsession');
                    res.redirect("/")
                } else {
                    const error = "Invalid email/password"
                    res.redirect(`/login?error=${error}`)
                }
            } else {
                const error = "Invalid email/password" 
                res.redirect(`/login?error=${error}`) //! kalau email salah
            }
        } catch (err) {
            console.log(err);
            res.send(err.message)
        }
    }

}
module.exports =  formLogin