const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const courseRouter = require('./courseRouter')
const contactRouter = require('./contactRouter')

router.use('/course', courseRouter)
router.use('/user', userRouter)
router.use('/contact', contactRouter)

module.exports = router