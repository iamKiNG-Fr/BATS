'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bats_users extends Model {
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
  bats_users.init({
    uuid:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING,
    dob: DataTypes.DATE,
    phone: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    country: DataTypes.STRING,
    state_of_residence: DataTypes.STRING,
    program: DataTypes.STRING,
    matric: DataTypes.STRING,
    post: DataTypes.STRING,
    grad_year: DataTypes.DATE,
    mascot: DataTypes.STRING,
    occupation: DataTypes.STRING,
    job_desc: DataTypes.STRING,
    emp_of_labour: DataTypes.BOOLEAN,
    vacancy: DataTypes.STRING,
    office_phone: DataTypes.STRING,
    office_address: DataTypes.STRING,
    password: DataTypes.STRING,
    access: {
      type: DataTypes.STRING,
      defaultValue: "alumni"
    },
    profile_img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'bats_users',
    underscored: true
  });
  return bats_users;
};