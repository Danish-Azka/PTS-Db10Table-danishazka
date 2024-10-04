export default (sequelize, DataTypes) => {
    const Bus = sequelize.define('Bus', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      jenis_Bus: {
        type: DataTypes.STRING,
        allowNull: false
      },
      tujuan: {
        type: DataTypes.STRING,
        allowNull: false
      },
      kapasitas: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {
      tableName: 'bus'
    });
  
    return Bus;
  };