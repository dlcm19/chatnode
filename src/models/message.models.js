const db = require('../utils/database')
const {DataTypes} = require('sequelize')

const Message = db.define('message', {
    id : {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,   
    },
    sender_id : {
       type: DataTypes.UUID,
       allowNull: false,
    },
    conversation_id:{
        type: DataTypes.UUID,
        allowNull: false,
    },
    message: {
        type: DataTypes.STRING,
        allowNull:false,
    },

})

module.exports = Message