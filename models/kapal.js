import { DataTypes } from "sequelize";
import db from '../utils/connection.js'

const Kapal = db.define(
    "Kapal", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    jenis_kapal: {
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
        tableName: "kapal",
    }
);

export default Kapal;