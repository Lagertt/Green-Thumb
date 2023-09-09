const Router = require('express');
const router = new Router();
const plantController = require('../controllers/plantController');

router.post('/', plantController.create);
router.get('/', plantController.getAll);
router.get('/:id', plantController.getOne);

module.exports = router;
