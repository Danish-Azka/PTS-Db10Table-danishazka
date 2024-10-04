import { DataTypes } from "sequelize";
import db from '../utils/connection.js'

const Penginapan = db.define(
    "Penginapan", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
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
    },
    {
        tableName: "penginapan",
    }
);

export default Penginapan;