const Users = require('./users.models')
const Participants = require('./participants.models')
const Message = require('./Message.models')
const Conversation = require('./conversations.models')

const initModels = () => {

    Users.belongsTo(Message)
    Message.hasMany(Users)
    Users.belongsTo(Participants)
    Participants.hasMany(Users)
    Users.belongsTo(Conversation)
    Conversation.hasMany(Users)

    Conversation.belongsTo(Message)
    Message.hasMany(Conversation)
    Conversation.belongsTo(Participants)
    Participants.hasMany(Conversation)
}


module.exports = initModels