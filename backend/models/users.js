const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql:dbuser:db123@localhost:3306/finance_app');
const Users = sequelize.define('Users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    login: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    passwd: {
        type: DataTypes.STRING(32),
        allowNull: false,
    },
    lasLogin: {
        type: DataTypes.DATE,
        allowNull: true
    },
    email: {
        allowNull: true,
        type: DataTypes.TEXT(255)
    }
}, {
    freezeTableName: true
});
/*
Users.findOrCreate({
        where: { login: "Admin", passwd: "1234", email: "cos@mail.com" }
    }).then(function(user, created) {
        console.log(user.get({
            plain: true
        }));
    })
*/

console.log(`User Check: ${Users === sequelize.models.Users}`);
module.exports = Users;