module.exports = (sequelize, DataTypes) => {
    const Quiz = sequelize.define('Quiz', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        question: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        choice_a: {
            type: DataTypes.STRING,
            allowNull: false
        },
        choice_b: {
            type: DataTypes.STRING,
            allowNull: false
        },
        choice_c: {
            type: DataTypes.STRING,
            allowNull: false
        },
        choice_d: {
            type: DataTypes.STRING,
            allowNull: false
        },
        answer: {
            type: DataTypes.STRING,
            allowNull: false
        },
        point: {
            type: DataTypes.INTEGER,
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
        tableName: 'quiz'
    });
    
    return Quiz;
}