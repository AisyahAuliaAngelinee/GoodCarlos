const { Item, Category } = require('../models')

class MainPage {
    static async showHomePage(req, res) {
        try {
            const dataItem = await Item.findAll()
            console.log(dataItem.Category, "<<<<<<<<<<<<");
            res.render('home-page.ejs', { dataItem })
        } catch (error) {
            console.log(error);
            res.send(error)
        }
    }
}

module.exports = MainPage