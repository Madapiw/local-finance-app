const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql:dbuser:db123@localhost:3306:');
const Users = require('./users')
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
    /*Users.hasMany(DBs, {
            foreignKey: {
                dbname: 'dbAccess',
                allowNull: true
            }
        })*/


module.exports = DBs;