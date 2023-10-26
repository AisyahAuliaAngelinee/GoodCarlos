const { User } = require('../models')

class formLogin{
    static async loginForm(req, res) {
        try {
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
            const user = await User.findOne({where:{email}})
            if(user) {
                const isValid = bcrypt.compareSync(password, user.password)
                if (isValid) {
                    req.session.UserId = user.UserId
                    return res.redirect("/home")
                } else {
                    const error = "Invalid email/password"
                    return res.redirect(`/login?error=${error}`)
                }
            } else {
                const error = "Invalid email/password" 
                return res.redirect(`/login?error=${error}`) //! kalau email salah
            }
        } catch (err) {
            console.log(err);
            res.send(err.message)
        }
    }

}
module.exports =  formLogin