import { DataTypes } from "sequelize";
import db from '../utils/connection.js'
import Client from "./client.js";

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
    }
    },
    {
        tableName: "review",
    }
);

Review.belongsTo(Client, {
    foreignKey: "ClientId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})

export default Review;