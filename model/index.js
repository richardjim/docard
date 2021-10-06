const dataBase = require("../config/database.js");

const Sequelize = require("sequelize");

const sequelize =
  new Sequelize('docard','postgres',  '07063137607',
  {
    host: 'localhost',
    dialect: 'postgres',
    
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.cards = require("./cards.model.js")(sequelize, Sequelize);
db.comments = require("./comment.model.js")(sequelize, Sequelize);

db.cards.hasMany(db.comments, { as: "comments" });
db.comments.belongsTo(db.cards, {
  foreignKey: "cardId",
  as: "card",
});

module.exports = db;
