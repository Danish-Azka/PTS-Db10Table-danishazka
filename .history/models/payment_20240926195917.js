import
export default (sequelize, DataTypes) => {
    const Payment = sequelize.define('Payment', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      metode_pembayaran: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      jumlah: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      tanggal_pembayaran: {
        type: DataTypes.DATE,
        allowNull: false
      }
    }, {
      tableName: 'payment'
    });
  
      Payment.belongsTo(models.Pemesanan, { foreignKey: 'PemesananIdDetail' });
      Payment.belongsTo(models.Pemesanan, { foreignKey: 'PemesananId' });
      Payment.belongsTo(models.Diskon, { foreignKey: 'DiskonId' });
  
    return Payment;
  };