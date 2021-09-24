const dataBase = require("../config/database.js");

const Sequelize = require("sequelize");

const sequelize =
  new Sequelize('docard','postgres',  '07063137607',
  {
    host: dataBase.host,
    dialect: 'postgres',
    
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.cards = require("./cards.model.js")(sequelize, Sequelize);
db.comment = require("./comment.model.js")(sequelize, Sequelize);

db.cards.hasMany(db.comment, { as: "comment" });
db.comment.belongsTo(db.cards, {
  foreignKey: "cardsId",
  as: "cards",
});

module.exports = db;
