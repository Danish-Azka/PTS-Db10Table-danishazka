export default (sequelize, DataTypes) => {
    const Diskon = sequelize.define('Diskon', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      jenis_diskon: {
        type: DataTypes.STRING,
        allowNull: false
      },
      jumlah_potongan: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      masa_berlaku: {
        type: DataTypes.DATE,
        allowNull: false
      }
    }, {
      tableName: 'diskon'
    });
  
    return Diskon;
};