const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');
const checkAuth = require('../middleware/authMiddleware');

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/auth', checkAuth, userController.check);
router.get('/:id', userController.getOne);

module.exports = router;
