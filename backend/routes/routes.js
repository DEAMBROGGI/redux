const Router = require('express').Router()
const validator = require('../config/validator')

const usersControllers = require('../controllers/userControllers');
const {signUpUsers, signInUser, signOutUser,verifyEmail}= usersControllers

Router.route('/auth/signUp')
.post(validator,signUpUsers)

Router.route('/auth/signIn')
.post(signInUser)

Router.route('/auth/signOut')
.post(signOutUser)

Router.route('/verify/:uniqueString') //RECIBE EL LINK DE USUARIO
.get(verifyEmail) //LLAMA A FUNCION DE VERIFICACIION

module.exports = Router