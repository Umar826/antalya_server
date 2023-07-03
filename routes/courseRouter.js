const Router = require('express')
const { Sequelize } = require('../db')
const courseController = require('../controllers/courseController')
const router = new Router()
const checkRole = require('../middleware/checkRoleMiddleware')

router.get('/', courseController.getCourse)
router.patch('/:id', courseController.update)
router.post('/', checkRole('ADMIN'), courseController.create)

module.exports = router