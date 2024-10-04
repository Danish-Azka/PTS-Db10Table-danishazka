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
    },
    jenis_layanan: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id_layanan: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
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

Pemesanan.belongsTo(Client, {
    foreignKey: "ClientId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})

Pemesanan.belongsTo(Bus, {
    foreignKey: 'id_layanan',
    constraints: true,
    scope: { jenis_layanan: 'Bus' }
});
Pemesanan.belongsTo(Penginapan, {
    foreignKey: 'id_layanan',
    constraints: true,
    scope: { jenis_layanan: 'Penginapan' }
});
Pemesanan.belongsTo(Kapal, {
    foreignKey: 'id_layanan',
    constraints: true,
    scope: { jenis_layanan: 'Kapal' }
 });
Pemesanan.belongsTo(Kereta, {
    foreignKey: 'id_layanan',
    constraints: true,
    scope: { jenis_layanan: 'Kereta' }
});
  
Pemesanan.belongsTo(Pesawat, {
    foreignKey: 'id_layanan',
    constraints: true,
    scope: { jenis_layanan: 'Pesawat' }
});


export default Review;