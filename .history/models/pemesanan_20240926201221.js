import { DataTypes } from "sequelize";
import db from '../utils/connection.js'

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

export default Pemesanan;