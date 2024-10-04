import { DataTypes } from "sequelize";
import db from '../utils/connection.js'

const Diskon = db.define(
    "Diskon", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
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
    },
    {
        tableName: "diskon",
    }
);

export default Diskon;