import { DataTypes } from "sequelize";
import db from '../utils/connection.js'

const Client = db.define(
    "Client", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nama: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nomor_telepon: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nomor_ktp: {
        type: DataTypes.STRING,
        allowNull: false
    }
    },
    {
        tableName: "client",
    }
);

export default Client;