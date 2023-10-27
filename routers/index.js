const UserController = require('../controllers/UserController')
const formLogin = require('../controllers/loginController')
const MainPage = require('../controllers/mainPageController')
const Review = require('../controllers/reviewsPageController')
const router = require('express').Router()

const isLoggedIn = function(req, res, next) {
    // console.log(req.session);
    if (!req.session.UserId) {
        const error = "Please login first!"
        res.redirect(`/login?error=${error}`)
    } else {
        next()
    }
}



//GET REGISTER
router.get('/register', UserController.registerForm)

//POST REGISTER
router.post('/register', UserController.postRegister)

//GET LOGIN
router.get('/login', formLogin.loginForm)

//POST LOGIN
router.post('/login', formLogin.postLogin)


// //GLOBAL MIDDLEWARE EXPRESS SESSION
// router.use(function (req, res, next) {
//     console.log(req.session);
//     console.log('Time', Date.now())
//     next()
// })

router.use(isLoggedIn)

// ! READ REVIEWS
router.get('/', MainPage.showHomePage)

//? UpVote
router.get('/:id/upVote', MainPage.upVote)

//? Add More Reviews
router.get('/add/reviews', Review.formReview)
router.post('/add/reviews', Review.submitReview)

//Update(EDIT)
router.get('/edit/reviews/:', Review.editReview)
router.get('/edit/reviews', Review.submitReview)


//ROUTER LOGOUT
router.get('/logout', MainPage.postLogout )

module.exports = router