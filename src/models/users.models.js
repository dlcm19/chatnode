const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const Participnts = require('./participants.models');
const Message = require('./message.models');
const Conversation = require('./conversations.models')

const Users = db.define("users", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "first_name",
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "last_name",
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
        isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  profile_imagen: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING(16),
    allowNull: false,
    unique: true
  },

  sender_id:{
    type: DataTypes.UUID,
    allowNull: false,
    field: 'sender_id',
    references:{
      key : 'id',
      model: Message
    }
  },
   user_id:{
    type: DataTypes.UUID,
    allowNull: false,
     field:'users_id',
     references:{
      key: 'id',
      model: Participnts
     }

   },
   createdBy:{
     type: DataTypes.UUID,
     allowNull: false,
     field : 'created_by',
     references:{
      key: 'id',
      model: Conversation
     }
   }
});

module.exports = Users