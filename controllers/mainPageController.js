const { Item, Category } = require('../models')
const formattedCurr = require('../helpers/formattedCurrency')

class MainPage {
    static async showHomePage(req, res) {
        try {  
            const test = await Category.findOne({
                where: {
                    name: 'Foods'
                },
                include: Item
            })
            res.render('home-page.ejs', { formattedCurr, data: test })
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
}

module.exports = MainPage