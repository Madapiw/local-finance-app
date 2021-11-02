const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql:dbuser:db123@localhost:3306:');
const User = sequelize.define('User', {
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
        allowNull: false
    }
});

console.log(`User Check: ${User === sequelize.models.User}`);
module.exports = User