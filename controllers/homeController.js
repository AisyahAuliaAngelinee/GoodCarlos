const { User, Profile, Category, Item, ItemCategory } = require('../models')

class homeController{
    static async showHome(req, res) {
        try {
            res.send('hello')
        } catch (err) {
            console.log(err);
            res.send(err.message)
            
        }
    }

}
module.exports = homeController