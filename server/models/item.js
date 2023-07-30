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
    }
  }
  Item.init({
    item_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
    name: {
      type: DataTypes.STRING,
      allowNull: false
  },
    des: {
      type: DataTypes.STRING,
      allowNull: false
  },
    used: {
      type: DataTypes.STRING
  },
    measurments: {
      type: DataTypes.JSON
  },
    size: {
      type: DataTypes.FLOAT
  },
    thumbnail: {
      type: DataTypes.STRING,
      allowNull: false
  },
    otherPictures: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
  }
  }, {
    sequelize,
    modelName: 'Item',
    tableName: 'items',
    timestamps: false
  });
  return Item;
};