import { DataTypes } from 'sequelize';

export default (sequelize) => 
  sequelize.define('reservation', {
    user: {
      type: DataTypes.STRING,
      allowNull: false
    },    
    event: {
      type: DataTypes.STRING,
      allowNull: false
    },
    startTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    endTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
  });