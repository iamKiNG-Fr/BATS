'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bats_admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    
    toJSON(){
      return {...this.get(), id: undefined}
    }
  }
  bats_admin.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    access: {
      type: DataTypes.INTEGER,
      defaultValue: 0 
    }
  }, {
    sequelize,
    modelName: 'bats_admin',
    underscored: true
  });
  return bats_admin;
};