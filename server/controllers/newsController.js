const { News } = require('../models/models');
const ApiError = require('../error/ApiError');
const uuid = require('uuid');
const path = require('path');

class NewsController {
  async create(req, res, next) {
    try {
      const { title, text, userId, newsCategoryId, date } = req.body;
      const { img } = req.files;
      const filename = uuid.v4() + '.jpg';
      img.mv(path.resolve(__dirname, '..', 'static', filename));

      const news = await News.create({
        title,
        text,
        userId,
        newsCategoryId,
        date,
        img: filename,
      });

      return res.json(news);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getAll(req, res) {
    let { newsCategoryId, limit, page } = req.query;
    page = page || 1;
    limit = limit || 18;
    let offset = page * limit - limit;

    const news = !newsCategoryId
      ? await News.findAndCountAll({ limit, offset })
      : await News.findAndCountAll({ where: { newsCategoryId }, limit, offset });
    return res.json(news);
  }
  async getOne(req, res) {
    const { id } = req.params;
    const news = await News.findOne({ where: { id } });
    return res.json(news);
  }
}

module.exports = new NewsController();
