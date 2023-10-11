const { Plant } = require('../models/models');
const ApiError = require('../error/ApiError');
const uuid = require('uuid');
const path = require('path');
const { off } = require('process');
const { platform } = require('os');

class PlantController {
  async create(req, res, next) {
    try {
      const { name, price, discount, watering, sunlight, typeId } = req.body;
      const { img } = req.files;
      const fileNames = [];

      img.forEach((item) => {
        let filename = uuid.v4() + '.jpg';
        fileNames.push(filename);
        item.mv(path.resolve(__dirname, '..', 'static', filename));
      });

      const plant = await Plant.create({
        name,
        price,
        discount,
        watering,
        sunlight,
        typeId,
        img: fileNames,
      });

      return res.json(plant);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getAll(req, res) {
    let { typeId, limit, page } = req.query;
    page = page || 1;
    limit = limit || 18;
    let offset = page * limit - limit;

    const plants = !typeId
      ? await Plant.findAndCountAll({ limit, offset })
      : await Plant.findAndCountAll({ where: { typeId }, limit, offset });
    return res.json(plants);
  }
  async getOne(req, res) {
    const { id } = req.params;
    const plant = await Plant.findOne({ where: { id } });
    return res.json(plant);
  }
}

module.exports = new PlantController();
