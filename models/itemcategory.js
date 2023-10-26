'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ItemCategory.belongsTo(models.Item, {foreignKey: 'ItemId'})
      ItemCategory.belongsTo(models.Category, {foreignKey: 'categoryId'})
    }
  }
  ItemCategory.init({
    ItemId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ItemCategory',
  });
  return ItemCategory;
};