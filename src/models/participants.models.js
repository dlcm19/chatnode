const db = require('../utils/database')
const {DataTypes} = require('sequelize')

const Participants = db.define('participants', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
    },
    conversation_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    user_id:{
        type: DataTypes.UUID
    },
})

module.exports = Participants