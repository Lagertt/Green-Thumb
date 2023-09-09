const Router = require('express');
const router = new Router();
const plantRouter = require('./plantRouter');
const typeRouter = require('./typeRouter');
const userRouter = require('./userRouter');

router.use('/user', userRouter);
router.use('/type', typeRouter);
router.use('/plant', plantRouter);

module.exports = router;
