export default (sequelize, DataTypes) => {
    const Kereta = sequelize.define('Kereta', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      jenis_kereta: {
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
      tableName: 'kereta'
    });
  
    return Kereta;
  };