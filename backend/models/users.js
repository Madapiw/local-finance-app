const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql:dbuser:db123@localhost:3306/finance_app');
const Users = sequelize.define('Users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    login: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    pass: {
        type: DataTypes.STRING(32),
        allowNull: false,
    },
    lasLogin: {
        type: DataTypes.DATEONLY,
        allowNull: true
    }
});

console.log(`User Check: ${Users === sequelize.models.Users}`);
module.exports = Users;