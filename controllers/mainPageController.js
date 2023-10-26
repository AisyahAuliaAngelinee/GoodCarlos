const { Item } = require('../models')

class MainPage {
    static async showHomePage(req, res) {
        try {
            const dataItem = await Item.findAll()
            res.render('home-page.ejs', { dataItem })
        } catch (error) {
            console.log(error);
            res.send(error)
        }
    }
}

module.exports = MainPage