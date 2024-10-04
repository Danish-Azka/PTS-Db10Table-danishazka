import { DataTypes } from "sequelize";
import db from '../utils/connection.js'
import Client from "./client.js";
import Bus from "./ticketingBus.js";
import k




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

Review.belongsTo(Client, {
    foreignKey: "ClientId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})

Review.belongsTo(Bus, {
    foreignKey: 'id_layanan',
    constraints: true,
    scope: { jenis_layanan: 'Bus' }
});
Review.belongsTo(Penginapan, {
    foreignKey: 'id_layanan',
    constraints: true,
    scope: { jenis_layanan: 'Penginapan' }
});
Review.belongsTo(Kapal, {
    foreignKey: 'id_layanan',
    constraints: true,
    scope: { jenis_layanan: 'Kapal' }
 });
Review.belongsTo(Kereta, {
    foreignKey: 'id_layanan',
    constraints: true,
    scope: { jenis_layanan: 'Kereta' }
});
  
Review.belongsTo(Pesawat, {
    foreignKey: 'id_layanan',
    constraints: true,
    scope: { jenis_layanan: 'Pesawat' }
});


export default Review;