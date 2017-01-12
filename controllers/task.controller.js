var Task = require('../models/tasks.js');

exports.post = function(req, res) {
  new Task({text: req.body.text, done: False}).save();
}

exports.list = function(req, res) {
  Task.find(function(err, tasks){
    res.send(tasks);
  });
}
