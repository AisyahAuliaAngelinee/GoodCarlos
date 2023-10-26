const UserController = require('../controllers/UserController')
const formLogin = require('../controllers/loginController')
const MainPage = require('../controllers/mainPageController')
const Review = require('../controllers/reviewsPageController')
const router = require('express').Router()

//GET REGISTER
router.get('/register', UserController.registerForm)

//POST REGISTER
router.post('/register', UserController.postRegister)

//GET LOGIN
router.get('/login', formLogin.loginForm)

//POST LOGIN
router.post('/login', formLogin.postLogin)

//GLOBAL MIDDLEWEAR EXPRESS SESSION
router.use(function (req, res, next) {
    console.log(req.session);
    console.log('Time', Date.now())
    next()
})

// ! READ REVIEWS
router.get('/', MainPage.showHomePage)

//? UpVote
router.get('/:id/upVote', MainPage.upVote)

//? Add More Reviews
router.get('/add/reviews', Review.createReview)
router.post('/add/reviews', Review.submitReview)


module.exports = router