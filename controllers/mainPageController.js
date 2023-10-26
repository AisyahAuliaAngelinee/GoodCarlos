const { Item, Category } = require('../models')
const formattedCurr = require('../helpers/formattedCurrency')

class MainPage {
    static async showHomePage(req, res) {
        // console.log(Item);
        try {  
            const test = await Category.findOne({
                where: {
                    name: 'Foods'
                },
                include: Item
            })
            // console.log(test, 'hahaha');
            res.render('home-page.ejs', {data: test, formattedCurr })
        } catch (error) {
            console.log(error);
            res.send(error)
        }
    }
    static async upVote(req, res) {
        try {
            await Item.upVote(+req.params.id)
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