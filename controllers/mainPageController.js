const { Item, Category } = require('../models')
const formattedCurr = require('../helpers/formattedCurrency')

class MainPage {

    static async showHomePage(req, res) {
        try {  
            const data = await Item.findAll({
                include: Category
            })
            res.render('home-page.ejs', { formattedCurr, data})
        } catch (error) {
            console.log(error);
            res.send(error)
        }
    }
    
    static async upVote(req, res) {
        try {
            Item.increment('vote', {
                by: 1,
                where: {
                    id: req.params.id
                }
            })
            res.redirect('/#product' + req.params.id)
        } catch (error) {
            console.log(error);
            res.send(error)
        }
    }
    
    static async postLogout(req, res) {
        try {
            // console.log(req.session);
            await req.session.destroy()
            console.log(req.session);
            res.redirect('/login')
        } catch (err) {
            console.log(err);
            res.send(err)
            
        }
    }
}

module.exports = MainPage