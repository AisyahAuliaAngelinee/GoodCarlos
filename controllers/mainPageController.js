const { Item, Category } = require('../models')
const formattedCurr = require('../helpers/formattedCurrency')

class MainPage {
    static async showHomePage(req, res) {
        try {
            // console.log(req.params, "<<<<<<<<<");
            const dataItem = await Item.findAll({
                include: Category
            })

            // res.send(dataItem[0].Categories)
            // console.log(dataItem, "<<<<<<<<<<<<");
            // console.log("test");
            res.render('home-page.ejs', { dataItem, formattedCurr })
        } catch (error) {
            console.log(error);
            res.send(error)
        }
    }

    static async upVote(req, res) {
        try {
            // console.log(req.params, "<<<<<<<<<<<<");
            await Item.upVote(+req.params.id)
            res.redirect('/#product' + req.params.id)
        } catch (error) {
            console.log(error);
            res.send(error)
        }
    }
}

module.exports = MainPage