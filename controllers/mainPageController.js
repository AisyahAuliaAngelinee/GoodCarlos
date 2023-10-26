const { Item, Category } = require('../models')
const formattedCurr = require('../helpers/formattedCurrency')

class MainPage {
    static async showHomePage(req, res) {
        try {
            const dataItem = await Item.findAll({
                include: Category
            })

            // res.send(dataItem[0].Categories)
            console.log(dataItem[0].Categories, "<<<<<<<<<<<<");
            // console.log("test");
            res.render('home-page.ejs', { dataItem, formattedCurr })
        } catch (error) {
            console.log(error);
            res.send(error)
        }
    }
}

module.exports = MainPage