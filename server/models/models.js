const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.STRING, defaultValue: 'USER' },
});

const NewsCategory = sequelize.define('news_category', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const News = sequelize.define('news', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false, unique: true },
  text: { type: DataTypes.TEXT, allowNull: false },
  date: { type: DataTypes.DATEONLY, defaultValue: DataTypes.NOW },
  img: { type: DataTypes.STRING },
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
  price: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  discount: { type: DataTypes.INTEGER, defaultValue: 0 },
  img: { type: DataTypes.ARRAY(DataTypes.STRING) },
  watering: { type: DataTypes.TEXT },
  sunlight: { type: DataTypes.TEXT },
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
Plant.belongsTo(Type);

Plant.hasMany(BasketPlant);
BasketPlant.belongsTo(Plant);

NewsCategory.hasMany(News);
News.belongsTo(NewsCategory);

User.hasMany(News);
News.belongsTo(User);

module.exports = {
  User,
  Basket,
  BasketPlant,
  Type,
  Plant,
  News,
  NewsCategory,
};
