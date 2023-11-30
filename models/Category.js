// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import database connection from config.js
const sequelize = require('../config/connection.js');
// Initialize Category model (table) by extending off Sequelize's Model class
class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      //ID is an integer
      type: DataTypes.INTEGER,
      //Not allowed to be Null
      allowNull: false,
      //ID is set as teh primary key
      primaryKey: true,
      //ID will automatically increment when new Categories are created
      autoIncrement: true
    },
    name: {
      //Category name is a String value
      type: DataTypes.STRING,
      //Not allowed to be null
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
