

module.exports = (sequelize, DataTypes) => {
    const cards = sequelize.define("cards", {
      title: {
        type: DataTypes.STRING
      }
    });
  
    return cards;
  };