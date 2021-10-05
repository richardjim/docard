

module.exports = (sequelize, DataTypes) => {
    const cards = sequelize.define("cards", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING
      }
    });
  
    return cards;
  };
  