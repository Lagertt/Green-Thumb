const { NewsCategory } = require('../models/models');
const ApiError = require('../error/ApiError');

class NewsCategoryController {
  async create(req, res) {
    const { name } = req.body;
    const category = await NewsCategory.create({ name });
    return res.json(category);
  }
  async getAll(req, res) {
    const categories = await NewsCategory.findAll();
    return res.json(categories);
  }
  async getOne(req, res) {
    const { id } = req.params;
    const category = await NewsCategory.findOne({ where: { id } });
    return res.json(category);
  }
}

module.exports = new NewsCategoryController();
