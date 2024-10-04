export default (sequelize, DataTypes) => {
    const Pesawat = sequelize.define('Pesawat', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nama_maskapai: {
        type: DataTypes.STRING,
        allowNull: false
      },
      nomor_penerbangan: {
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
      tableName: 'pesawat'
    });
  
    return Pesawat;
  };