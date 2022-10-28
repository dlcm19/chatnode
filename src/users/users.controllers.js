//? Dependencies
const uuid = require('uuid')
const { hashPassword } = require('../utils/crypto')
const Conversation = require('../models/conversations.models')
const Message = require('../models/message.models')
const Users = require('../models/users.models')





//? datos requeridos para  crear el usuario
const createUser = async (data) => {
    const newUser = await Users.create({
        id: uuid.v4(),
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: hashPassword(data.password),
        profileImagen: data.profileImagen,
        phone: data.phone,

    })
    return newUser
}

const getAllUser = async () => {
    const data = await Users.findAll({
        where: {
            email: true
        }
    })
    return data
}



//? para crear la conversation
const createConversation = async(data) =>{
    const newConversation  = await Conversation.create({
       id: uuid.v4(),
       title: data.title,
       imagenUrl: data.imagenUrl
    })
    return newConversation
 }

 //? para create message
const createMessage = async (data) =>{
    const newMessage = await Message.create({
        id: uuid.v4(),
        message: data.message
    })

    return newMessage
}

//?para delete la message
const deleteMessage = async(id) =>{
    const data = await Message.destroy({
       where : {
          id
       }
    })
      return data
  }

//?para delete la conversation
const deleteConversation = async(id) =>{
    const data = await Conversation.destroy({
       where : {
          id
       }
    })
      return data
  }

  //? obtener un conversation por el id
  const getConversationById = async (id) => {
    const data = await Conversation.findOne({
        where: {
            id
        }
    })
    return data
}

//? obtener un message por el id
const getMessageById = async (id) => {
    const data = await Message.findOne({
        where: {
            id
        }
    })
    return data
}

//? para editar una conversation por el id
const updateConversation = async (id, data) => {
    const result = await Conversation.update(data, {
        where: {
            id
        }
    })
    return result

}


module.exports = {
    createUser,
    createConversation,
    createMessage,
    deleteConversation,
    getConversationById,
    getMessageById,
    updateConversation,
    deleteMessage,
    getAllUser
}