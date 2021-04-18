const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  birthday: {
    type: Date,
  },
  status: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model('Users', UserSchema);

module.exports = UserModel;
