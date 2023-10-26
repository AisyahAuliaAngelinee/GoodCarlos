const { Item, Category, ItemCategory } = require('../models')

class Review {
    static async formReview(req, res) {
        try {
            // res.send('Masuk Controller')
            const data = await Category.findAll({
                include: Item
            })
            // console.log(data, "<<<<<<<<<<<");
            res.render('review-page.ejs', { data })
        } catch (error) {
            console.log(error);
            res.send(error)
        }
    }

    static async submitReview(req, res) {
        try {
            // console.log('Masuk Controller');
            console.log(req.body);
            const { name, categoryId, imageURL, review, price } = req.body
            let dataItem = await Item.create({
                name: name,
                imageURL: imageURL,
                review: review,
                price: price
            })

            await ItemCategory.create({
                ItemId: dataItem.id,
                categoryId: categoryId
            })
            res.redirect('/')
        } catch (error) {
            console.log(error);
            res.send(error)
        }
    }
    static async editReview(req, res) {
        try {
            
        } catch (err) {
            console.log(err);
            res.send(err)
            
        }
    }
    static async submitReview(req, res) {
        try {
            
        } catch (err) {
            console.log(err);
            res.send(err)
            
        }
    }
}

module.exports = Review