'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Profile.hasOne(models.User, {foreignKey: 'UserId'})
    }
  }
  Profile.init({
    fullName: DataTypes.STRING,
    phoneNumber: DataTypes.INTEGER,
    dateOfBirth: DataTypes.DATE,
    address: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};