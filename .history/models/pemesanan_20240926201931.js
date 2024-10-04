import { DataTypes } from "sequelize";
import db from '../utils/connection.js'
import Penginapan from "./penginapan.js";
imp

const Pemesanan = db.define(
    "Pemesanan", {
    id_detail: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
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
    },
    ClientId: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
    },
    {
        tableName: "pemesanan",
    }
);

Pemesanan.belongsTo(Kapal, {
    foreignKey: 'id_layanan',
    constraints: true,
    scope: { jenis_layanan: 'Kapal' }
  });
  Pemesanan.belongsTo(Kereta, {
    foreignKey: 'id_layanan',
    constraints: true,
    scope: { jenis_layanan: 'Kereta' }
  });
  
  Pemesanan.belongsTo(Pesawat, {
      foreignKey: 'id_layanan',
      constraints: true,
      scope: { jenis_layanan: 'Pesawat' }
    });
  
    Pemesanan.belongsTo(Bus, {
      foreignKey: 'id_layanan',
      constraints: true,
      scope: { jenis_layanan: 'Bus' }
    });
  
    Pemesanan.belongsTo(Penginapan, {
      foreignKey: 'id_layanan',
      constraints: true,
      scope: { jenis_layanan: 'Penginapan' }
    });

export default Pemesanan;