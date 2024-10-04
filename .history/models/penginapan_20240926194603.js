export default (sequelize, DataTypes) => {
    const Penginapan = sequelize.define('Penginapan', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      tipe_penginapan: {
        type: DataTypes.STRING,
        allowNull: false
      },
      nama_penginapan: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      alamat: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      bintang: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    }, {
      tableName: 'penginapan'
    });
  
    return Penginapan;
  };