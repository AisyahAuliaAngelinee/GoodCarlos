// const { Item, Category, ItemCategory } = require('../models')

// class Review {
//     static async formReview(req, res) {
//         try {
//             const data = await Category.findAll({
//                 include: Item
//             })
//             res.render('review-page.ejs', { data })
//         } catch (error) {
//             console.log(error);
//             res.send(error)
//         }
//     }

//     static async submitReview(req, res) {
//         try {
//             // console.log('Masuk Controller');
//             console.log(req.body);
//             const { name, imageURL, review, price } = req.body
//             let dataItem = await Item.create({
//                 name: name,
//                 imageURL: imageURL,
//                 review: review,
//                 price: price
//             })

//             await ItemCategory.create({
//                 ItemId: dataItem.id,
//                 categoryId: dataItem.categoryId
//             })
//             res.redirect('/add/review')
//         } catch (error) {
//             console.log(error);
//             res.send(error)
//         }
//     }

//     static async editReview(req, res) {
//         try {
//             res.send('Masuk Controller EDIT MAAP MASIH MUNCUL GINI 🙏🏿')
//         } catch (err) {
//             console.log(err);
//             res.send(err)
//         }
//     }
// }

// module.exports = Review