import { DataTypes } from "sequelize";
import db from '../utils/connection.js'

const Payment = db.define(
    "Payment", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    metode_pembayaran: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    jumlah: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tanggal_pembayaran: {
        type: DataTypes.DATE,
        allowNull: false
    },
    PemesananIdDetail: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    PemesananId: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    DiskonId: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
    },
    {
        tableName: "payment",
    }
);


export default Payment;