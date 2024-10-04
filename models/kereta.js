import { DataTypes } from "sequelize";
import db from '../utils/connection.js'

const Kereta = db.define(
    "Kereta", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
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
    },
    {
        tableName: "kereta",
    }
);

export default Kereta;