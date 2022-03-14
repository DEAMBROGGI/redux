const Router = require('express').Router()
const validator = require('../config/validator')

const usersControllers = require('../controllers/userControllers');
const {signUpUsers, signInUser, signOutUser}= usersControllers

Router.route('/auth/signUp')
.post(validator,signUpUsers)

Router.route('/auth/signIn')
.post(signInUser)

Router.route('/auth/signOut')
.post(signOutUser)

module.exports = Router