'use strict';
const {
  Model
} = require('sequelize');
const { underscoredIf } = require('sequelize/types/utils');
module.exports = (sequelize, DataTypes) => {
  class HeroPower extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  HeroPower.init({
    heroId: DataTypes.INTEGER,
    powerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'HeroPower',
    tableName: 'HeroPowers',
    //tableName: 'hero_powers'
    //underscored: true,
  });
  return HeroPower;
};