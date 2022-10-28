const { response } = require("express");
const usersControllers = require("./users.controllers");

//? createUsers
const createUsers = (req, res) =>{
  const { firstName, lastName , email , password, profileImagen, phone} = req.body
  if(firstName && lastName && email && password && profileImagen && phone){
    usersControllers.createUsers({firstName, lastName , email , password, profileImagen, phone})
  .then((data) => {
    res.status(201).json(data);
  })
  .catch((err) => {
    res.status(400).json(err.message);
  });
  } else {
    res.status(400).json({message: 'All fields are required'})
  }
} 

const getAllUser = (req, res) => {
  usersControllers
    .getAllUser()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

//? createConversation
const createConversation = (req, res) =>{
  const {title, imagenUrl} = req.body
  if( title, imagenUrl){
    usersControllers.createConversation({title, imagenUrl})
  .then((data) => {
    res.status(201).json(data);
  })
  .catch((err) => {
    res.status(400).json(err.message);
  });
  } else {
    res.status(400).json({message: 'All fields are required'})
  }
}

//?crear mensaje
const createMessage = (req, res) =>{
  const {message} = req.body
  if( message){
    usersControllers.createConversation({message})
  .then((data) => {
    res.status(201).json(data);
  })
  .catch((err) => {
    res.status(400).json(err.message);
  });
  } else {
    res.status(400).json({message: 'All fields are required'})
  }
}


//? para obtener las conversaciones
const getConversation = (req, res) =>{
  usersControllers.createConversation()
  .then((response) =>{
    res.status(200).json(response)
  })
  .catch((err) => {
    res.status(400).json({message: err.message})
  })
}

//? para obtener un conversation en espeficico
const getConversationById = (req,res)=>{
  const id = req.params.id
  usersControllers.getConversationById(id)
  .then((response) =>{
    res.status(200).json(response)
  })
  .catch((err) => {
    res.status(404).json({message: err.message})
  })
}

//? para obtener un message en especifico
const getMessageById = (req,res)=>{
  const id = req.params.id
  usersControllers.getMessageById(id)
  .then((response) =>{
    res.status(200).json(response)
  })
  .catch((err) => {
    res.status(404).json({message: err.message})
  })
}

//? para modificar una conversation desde la
//? /api/v1/conversations/:conversation_id

const patchConversation = (req, res) =>{
  const id = req.params.id
  const {title, image_url } = req.body
  usersControllers.updateConversation(id, {title, image_url, } )
  .then(data => {
    if(data[0]){
      res.status(200).json({message: `Updated conversation `})
    } else {
      res.status(400).json({message: 'The conversation you want to modify does not exist'})
    }
  })
  .catch((err) => {
    res.status(404).json({message: err.message})
  })

}

//? para eliminar un message con la ruta 
//?/api/v1/conversations/:conversation_id/messages/:message_id

const deleteMessage = (req,res) =>{
  const id = req.params.id
  usersControllers.deleteConversation(id)
  .then((data) => {
    if(data){
      res.status(204).json()
    } else {
      res.status(400).json({message: 'Invalid ID'})
    }
  })
  .catch((err) =>{
    res.status(400).jsaon({message: err.message})
  })
}

module.exports = {
  createUsers,
  createConversation,
  getConversation,
  getConversationById,
  getMessageById,
  patchConversation,
  deleteMessage,
  getAllUser,
  createMessage
};
