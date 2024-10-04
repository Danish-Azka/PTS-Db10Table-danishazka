export default (sequelize, DataTypes) => {
    const Kapal = sequelize.define('Kapal', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      jenis_kapal: {
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
      tableName: 'kapal'
    });
  
    return Kapal;
  };