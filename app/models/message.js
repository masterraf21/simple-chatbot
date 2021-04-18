const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  id: {type: String, required: true},
  text: {type: String, required: true},
  user_id: {type: String, required: true},
  timestamp: {type: Date, required: true},
});

const MessageModel = mongoose.model('Messages', MessageSchema);

module.exports = MessageModel;
