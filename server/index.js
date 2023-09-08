require('dotenv').config();
const express = require('express');
const sequelize = require('./db');

//берём номер порта из переменного окружения .env, по умолчанию порт 5000
const PORT = process.env.PORT || 5000;

const app = express();

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
