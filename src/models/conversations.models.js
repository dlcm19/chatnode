const db = require('../utils/database')
const {DataTypes} = require('sequelize')
const Message = require('./message.models');
const Participants = require('./participants.models');


const Conversation = db.define('conversation', {
    id:{
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    title:{
        type: DataTypes.STRING(30),
    },
    image_url:{
        type:DataTypes.STRING,
    },
    created_by:{
        type: DataTypes.UUID,
    },
    message_id:{
        type: DataTypes.UUID,
        allowNull: false,
        field:'message_id',
        references:{
            key: 'id',
            model: Message
        },
    },
    participants_id:{
        type: DataTypes.UUID,
        allowNull: false,
        field:'participants_id',
        references:{
            key: 'id',
            model: Participants
        },
    }
})

module.exports = Conversation