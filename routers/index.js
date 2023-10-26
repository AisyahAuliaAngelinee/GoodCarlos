const UserController = require('../controllers/UserController')
const homeController = require('../controllers/homeController')
const formLogin = require('../controllers/loginController')
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


//HOME
router.use('/home', homeController.showHome)


module.exports = router