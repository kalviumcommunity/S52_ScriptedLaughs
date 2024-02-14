const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    title: String,
    description: String,
    category: String,
    difficulty: String
}, { versionKey: false });

module.exports = mongoose.model("datas", taskSchema);
