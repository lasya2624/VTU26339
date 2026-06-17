const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Notification = sequelize.define("Notification", {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    type: {
        type: DataTypes.STRING,
        allowNull: false
    },

    message: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    studentId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    isRead: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }

}, {

    timestamps: true

});

module.exports = Notification;