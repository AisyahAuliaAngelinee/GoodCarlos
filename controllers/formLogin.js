const { User } = require('../models')

class formLogin{
    static async loginForm(req, res) {
        try {
            const { error } = req.query
            res.render("formLogin", {error})
        } catch (err) {
            console.log(err);
            res.send(err.message)
            
        }
    }
    
    static async postLogin(req, res) {
        try {
            const { email, password } = req.body
            await User.findOne({
                if(user) {
                    const isValid = bcrypt.compareSync(password, user.password)
                    if (isValid) {
                        req.session.UserId = user.UserId
                        return res.redirect("/home")
                    } else {
                        const error = "Invalid email/password"
                        return res.redirect(`/login?error=${error}`)
                    }
                } //! ga mau dikasi else why :( 
            })
        } catch (err) {
            console.log(err);
            res.send(err.message)
        }
    }

}
module.exports =  formLogin