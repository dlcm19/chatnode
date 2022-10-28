const router = require('express').Router()
const passport = require('passport')
const adminValidate = require('../middlewares/role.middleware')
const userServices = require('./users.services')

require('../middlewares/auth.middleware')(passport)

router.get('/', userServices.getAllUser)
// router.post('/api/v1/conversation', userServices.createConversation)
// router.post('/usercreate', userServices.createUsers)




/**************************************** */

//? rutas raiz

router.get('/', userServices.getAllUsers)



module.exports = router