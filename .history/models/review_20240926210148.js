import { DataTypes } from "sequelize";
import db from '../utils/connection.js'

const Review = db.define(
    "Review", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    komentar: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    tanggal_ulasan: {
        type: DataTypes.DATE,
        allowNull: false
    },
    ClientId: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
    },
    {
        tableName: "review",
    }
);

Transaksi.belongsTo(Mobil, {
    foreignKey: "MobilId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})

export default Review;