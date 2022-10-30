'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Power extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Power.belongsToMany(models.Hero, { 
        through: 'HeroPowers',
        foreignKey: { name: 'powerId' },
      });
    }
  }
  Power.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Power',
    tableName: 'Powers',
    //underscored: true,
  });
  return Power;
};