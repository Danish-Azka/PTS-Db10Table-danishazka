export default (sequelize, DataTypes) => {
    const Pemesanan = sequelize.define('Pemesanan', {
      id_detail: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      jenis_layanan: {
        type: DataTypes.STRING,
        allowNull: false
      },
      id_layanan: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      tanggal_mulai: {
        type: DataTypes.DATE,
        allowNull: false
      },
      tanggal_selesai: {
        type: DataTypes.DATE,
        allowNull: false
      },
      jumlah_penumpang: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      harga: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      }
    }, {
      tableName: 'pemesanan'
    });
  
      Pemesanan.belongsTo(models.Client, { foreignKey: 'ClientId' });
      Pemesanan.belongsTo(models.Kapal, { foreignKey: 'id_layanan' });
    };
  
    return Pemesanan;
  };