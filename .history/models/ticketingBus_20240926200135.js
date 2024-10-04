import { DataTypes } from "sequelize";
import db from '../utils/connection.js'

const Bus = db.define(
    "Bus", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    jenis_Bus: {
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
        tableName: "bus",
    }
);

export default Bus