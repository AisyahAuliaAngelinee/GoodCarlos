const { Item, Category } = require('../models')

class Review {
    static async createReview(req, res) {
        try {
            res.send('Masuk Controller')
        } catch (error) {
            console.log(error);
            res.send(error)
        }
    }
}

module.exports = Review