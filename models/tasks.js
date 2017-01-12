var mongoose = require('mongoose');

var taskSchema = mongoose.Schema({
  text: String,
  done: Boolean
});

module.exports = mongoose.model('Task', taskSchema);
