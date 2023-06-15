module.exports = (sequelize, DataTypes) => {
    const Animal = sequelize.define('Animal', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description_0: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        description_1: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        description_2: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        description_3: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        description_4: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        tableName: 'animal'
    });
    
    return Animal;
}