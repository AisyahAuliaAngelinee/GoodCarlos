const UserController = require('../controllers/UserController')
const formLogin = require('../controllers/loginController')
const MainPage = require('../controllers/mainPageController')
const router = require('express').Router()

const isLoggedIn = function(req, res, next) {
    console.log(req.session);
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

//GLOBAL MIDDLEWEAR EXPRESS SESSION
router.use(function (req, res, next) {
    console.log(req.session);
    console.log('Time', Date.now())
    next()
})

// //GLOBAL MIDDLEWARE EXPRESS SESSION
// router.use(function (req, res, next) {
//     console.log(req.session);
//     console.log('Time', Date.now())
//     next()
// })

router.use(isLoggedIn)

// ! READ REVIEWS
router.get('/home', MainPage.showHomePage)

//? Add More Reviews
router.get('/add/review', MainPage.formReview)
router.post('/add/review', MainPage.submitReview)

//Update(EDIT)
router.get('/edit/:id', MainPage.editReview)
router.post('/edit/:id', MainPage.submitEditReview)

//? UpVote
router.get('/home/:id/upVote', MainPage.upVote)


// DELETE
router.get('/home/:id/delete', MainPage.delItem)

//ROUTER LOGOUT
router.get('/logout', MainPage.postLogout )

module.exports = router