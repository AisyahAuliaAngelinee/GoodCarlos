const UserController = require('../controllers/UserController')
const formLogin = require('../controllers/formLogin')
const router = require('express').Router()



//GET REGISTER
router.get('/register', UserController.registerForm)

//POST REGISTER
router.post('/register', UserController.postRegister)

//GET LOGIN
router.get('/login', formLogin.loginForm)

//POST LOGIN
router.get('/login', formLogin.postLogin)


module.exports = router