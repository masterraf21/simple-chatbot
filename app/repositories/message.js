const Message = require('../models/message');

async function createMessage(message) {
  return await new Message(message).save();
}

async function getAllMessages() {
  const messages = await Message.find({}).sort();

  return messages;
}

async function getMessageById(id) {
  const message = await Message.findOne({id: id});

  return message;
}

async function deleteMessageById(id) {
  return await Message.findOneAndDelete({id: id});
}

module.exports = {
  createMessage,
  getAllMessages,
  getMessageById,
  deleteMessageById,
};
