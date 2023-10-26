const UserController = require('../controllers/UserController')
const formLogin = require('../controllers/formLogin')
const MainPage = require('../controllers/mainPageController')
const router = require('express').Router()



//GET REGISTER
router.get('/register', UserController.registerForm)

//POST REGISTER
router.post('/register', UserController.postRegister)

//GET LOGIN
router.get('/login', formLogin.loginForm)

//POST LOGIN
router.post('/login', formLogin.postLogin)

// ! READ REVIEWS
router.get('/home', MainPage.showHomePage)


module.exports = router