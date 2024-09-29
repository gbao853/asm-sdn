const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  text: { type: String, required: true },
  options: [String],
  correctAnswerIndex: { type: Number, required: true },
  keywords: [String]
});

module.exports = mongoose.model('Question', questionSchema);
