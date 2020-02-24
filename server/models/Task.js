const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }
})

const TaskModel = mongoose.model('task', TaskSchema)

module.exports = TaskModel;




