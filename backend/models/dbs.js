const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql:dbuser:db123@localhost:3306:');
const DBs = sequelize.define('DBs', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    dbName: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})
console.log(`DBs Check: ${DBs === sequelize.models.DBs}`);
module.exports = DBs;