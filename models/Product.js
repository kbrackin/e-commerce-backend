// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import database connection from config.js
const sequelize = require('../config/connection');
// Initialize Product model (table) by extending off Sequelize's Model class

class Product extends Model {}
// set up fields and rules for Product model

Product.init(
  {
    // define columns
    id: {
      //ID is an integer
      type: DataTypes.INTEGER,
      //Not allowed to be null
      allowNull: false,
      //This property is the primary key
      primaryKey: true,
      //ID will automatically increment when a new Product is created
      autoIncrement: true
    },
    name: {
      //Name is a string
      type: DataTypes.STRING,
      //Not allowed to be null
      allowNull: false
    },
    cost: {
      //Price is an integer
      type: DataTypes.INTEGER,
      //Not allowed to be null
      allowNull: false,
      //This value must be a decimal to be valid
      validate: {
        isDecimal: true
      },
    },
    inventory: {
      //Amount in inventory is an integer
      type: DataTypes.INTEGER,
      //Not allowed to be null
      allowNull: false,
      //This value will be set at 25 if there is no input
      defaultValue: 25,
      //This value must be a numeric to be valid
      validate: {
        isNumeric: true
      }
    },
    category_id: {
      //ID of the foreign key ID from Category is an integer
      type: DataTypes.INTEGER,
      //This value is allowed to be null
      allowNull: true,
      //This defines where the Category ID is pulled from
      references: {
        model: 'category',
        key: 'id'
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
