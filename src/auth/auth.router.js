

const router = require('express').Router()
// const authServices = require('./auth.services')
const {createUsers} = require('../users/users.services')

//? /api/v1/auth

router.post('/register', createUsers)

router.post('/login', authServices.login)

module.exports = router
