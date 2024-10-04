import { DataTypes } from "sequelize";
import db from '../utils/connection.js'

const Pesawat = db.define(
    "Pesawat", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
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
    },
    {
        tableName: "pesawat",
    }
);

export default Pesawat;