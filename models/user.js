const { hashPassword } = require('../helpers/bcryptjs');
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.Profile, {foreignKey: 'UserId'})
      User.hasMany(models.Item, {foreignKey: 'UserId'})
    }
  }
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  
  //! HOOKS
  User.beforeCreate((user) => {
    user.password = hashPassword(user.password)
  })
  return User;
};