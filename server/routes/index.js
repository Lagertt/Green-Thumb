const Router = require('express');
const router = new Router();
const plantRouter = require('./plantRouter');
const typeRouter = require('./typeRouter');
const userRouter = require('./userRouter');
const newsRouter = require('./newsRouter');
const newsCategoryRouter = require('./newsCategoryRouter');

router.use('/user', userRouter);
router.use('/type', typeRouter);
router.use('/plant', plantRouter);
router.use('/news', newsRouter);
router.use('/news_category', newsCategoryRouter);

module.exports = router;
