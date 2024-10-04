export default (sequelize, DataTypes) => {
    const Review = sequelize.define('Review', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
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
    }, {
      tableName: 'review'
    });
  
      Review.belongsTo(models.Client, { foreignKey: 'ClientId' });
    };
  
    return Review;
  };