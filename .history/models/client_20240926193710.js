export default (sequelize, DataTypes) => {
    const Client = sequelize.define('Client', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nama: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      nomor_telepon: {
        type: DataTypes.STRING,
        allowNull: false
      },
      nomor_ktp: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      tableName: 'client'
    });
  
    return Client;
  };