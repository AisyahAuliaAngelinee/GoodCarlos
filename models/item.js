'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item.hasMany(models.ItemCategory, {foreignKey: 'ItemId'})
      Item.belongsTo(models.User, {foreignKey: 'UserId'})
    }
  }
  Item.init({
    name: DataTypes.STRING,
    imageURL: DataTypes.STRING,
    review: DataTypes.STRING,
    price: DataTypes.INTEGER,
    vote: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};