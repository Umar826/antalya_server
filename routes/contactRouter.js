const Router = require('express')
const contactController = require('../controllers/contactController')
const router = new Router()

router.get('/', contactController.getAll)
router.post('/', contactController.create)
router.delete('/:id', contactController.delete)

module.exports = router