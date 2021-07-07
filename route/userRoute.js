const express = require('express')
const { postUser, signIn, signOut, userById, userDetails, userList, requireSignin, postConfirmation, resendToken, forgetPassword, passwordReset } = require('../controller/user')
const router = express.Router()

router.post('/postuser', postUser)
router.post('/confirmation/:token', postConfirmation)
router.post('/resendtoken', resendToken)

router.post('/signin', signIn)
router.post('/signout', signOut)
router.get('/userlist', userList)
router.param('userid', userById)
router.get('/userdetails/:userid', requireSignin, userDetails)

router.post('/forgetpassword', forgetPassword)
router.put('/resetpassword/:token', passwordReset)



module.exports = router