'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HeroPowers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  HeroPowers.init({
    heroId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Hero',
        key: 'id',
      },
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    },
    powerId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Power',
        key: 'id',
      },
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
  }}, {
    sequelize,
    modelName: 'HeroPowers',
    tableName: 'HeroPowers',
    //tableName: 'hero_powers'
    //underscored: true,
  });
  return HeroPowers;
};