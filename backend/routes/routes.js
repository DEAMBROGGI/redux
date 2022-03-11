const Router = require('express').Router()

const usersControllers = require('../controllers/userControllers');
const {signUpUsers, signInUser, signOutUser}= usersControllers

Router.route('/auth/signUp')
.post(signUpUsers)

Router.route('/auth/signIn')
.post(signInUser)

Router.route('/auth/signOut')
.post(signOutUser)

module.exports = Router