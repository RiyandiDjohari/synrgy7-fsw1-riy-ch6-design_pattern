const router = require('express').Router();
const usersRouter = require('./usersRouter');
const authRouter = require('./authRouter');

router.get("/", (req, res) => {
    res.render("dashboard")
})
router.use('/users', usersRouter)
router.use('/auth', authRouter)

module.exports = router;