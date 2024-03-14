"use strict";
import Sequelize from "sequelize";
import config from "../config/config.js";
import User from "./User.js";
import Room from "./Room.js";
import Msg from "./Msg.js";

const env = process.env.NODE_ENV || "development";
const db = {};

const sequelize = new Sequelize(
  config[env].database,
  config[env].username,
  config[env].password,
  config[env]
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = User(sequelize, Sequelize);
db.Room = Room(sequelize, Sequelize);
db.Msg = Msg(sequelize, Sequelize);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

export default db;
