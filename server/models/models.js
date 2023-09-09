const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.STRING, defaultValue: 'USER' },
});

const Basket = sequelize.define('basket', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const BasketPlant = sequelize.define('basket_plant', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Plant = sequelize.define('plant', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING },
  price: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  img: { type: DataTypes.STRING },
  watering: { type: DataTypes.STRING },
  sunlight: { type: DataTypes.STRING },
});

const Type = sequelize.define('type', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

User.hasOne(Basket);
Basket.belongsTo(User);

Basket.hasMany(BasketPlant);
BasketPlant.belongsTo(Basket);

Type.hasMany(Plant);
Plant.belongsTo(Basket);

Plant.hasMany(BasketPlant);
BasketPlant.belongsTo(Plant);

module.exports = {
  User,
  Basket,
  BasketPlant,
  Type,
  Plant,
};
