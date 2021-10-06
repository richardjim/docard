

module.exports = (sequelize, DataTypes) => {
    const Card = sequelize.define("card", {
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
  
    return Card;
  };
  