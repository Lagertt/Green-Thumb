const { Plant } = require('../models/models');
const ApiError = require('../error/ApiError');
const uuid = require('uuid');
const path = require('path');
const { off } = require('process');
const { platform } = require('os');

class PlantController {
  async create(req, res, next) {
    try {
      const { name, price, watering, sunlight, typeId } = req.body;
      const { img } = req.files;
      let filename = uuid.v4() + '.jpg';
      img.mv(path.resolve(__dirname, '..', 'static', filename));

      const plant = await Plant.create({
        name,
        price,
        watering,
        sunlight,
        typeId,
        img: filename,
      });

      return res.json(plant);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getAll(req, res) {
    const { typeId, limit, page } = req.query;
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
