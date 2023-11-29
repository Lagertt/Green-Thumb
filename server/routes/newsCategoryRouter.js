const Router = require('express');
const router = new Router();
const newsCategoryController = require('../controllers/newsCategoryController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', checkRole('ADMIN'), newsCategoryController.create);
router.get('/', newsCategoryController.getAll);
router.get('/:id', newsCategoryController.getOne);

module.exports = router;
