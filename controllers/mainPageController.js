const { Item, Category, ItemCategory } = require('../models')
const formattedCurr = require('../helpers/formattedCurrency');

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
            res.redirect('/home/#product' + req.params.id)
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

    static async delItem(req, res) {
        try {
            await Item.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.redirect('/home')
        } catch (error) {
            console.log(error);
            res.send(error)
        }
    }

    static async formReview(req, res) {
        try {
            const data = await Category.findAll({
                include: Item
            })
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
            const { name, imageURL, review, price } = req.body
            let dataItem = await Item.create({
                name: name,
                imageURL: imageURL,
                review: review,
                price: price
            })

            await ItemCategory.create({
                ItemId: dataItem.id,
                categoryId: dataItem.categoryId
            })
            res.redirect('/add/review')
        } catch (error) {
            if (error.name == 'SequelizeValidationError') {
                let err = error.errors.map(el => el.message)
                res.send(err)
            } else {
                console.log(error);
                res.send(error)
            }
        }
    }

    static async editReview(req, res) {
        try {
            const data = await Item.findOne({
                include: Category,
                where: {
                    id: req.params.id
                }
            })
            res.render('editReview-page.ejs', { data })
        } catch (err) {
            console.log(err);
            res.send(err)
        }
    }

    static async submitEditReview(req, res) {
        try {
            // console.log('Masuk Controller');
            // res.send(req.body)
            const { name, imageURL, review, price } = req.body
            await Item.update({
                name: name,
                imageURL: imageURL,
                review: review,
                price: price
            }, {
                where: {
                    id: req.params.id
            }})
            res.redirect('/home')
        } catch (error) {
            console.log(error);
            res.send(error)
        }
    }
}

module.exports = MainPage