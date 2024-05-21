const { getLoginPage, loginRequest, getRegisterPage, registerUser } = require('../controller/authController');
const router = require('express').Router();

router.get('/login', getLoginPage)
router.post("/login", loginRequest)
router.get('/register', getRegisterPage)
router.post('/register', registerUser)

module.exports = router;