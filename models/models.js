const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Course = sequelize.define('course', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    price: {type: DataTypes.FLOAT}
})

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique:true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Contact = sequelize.define('contact', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    phone: {type: DataTypes.STRING},
    iban: {type: DataTypes.STRING},
    name: {type: DataTypes.STRING},
    course: {type: DataTypes.STRING},
    post: { type: DataTypes.STRING},
    get: {type: DataTypes.STRING}
})

module.exports = {
    Course,
    User,
    Contact
}