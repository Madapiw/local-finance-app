const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql:dbuser:db123@localhost:3306/finance_app');
const usersAndDb = sequelize.define('UsersAndDb', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    owner: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    hasAccess: {
        type: DataTypes.BOOLEAN,
        default: false
    }
});

console.log(`User and Dbs Check: ${usersAndDb === sequelize.models.UsersAndDb}`);
module.exports = usersAndDb;