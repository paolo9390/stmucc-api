const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AboutSchema = new Schema({
    _id: { type: String},
    title: { type: String, required: true},
    subtitle: { type: String, required: false },
    content: { type: String, required: true },
});

// Export the model
module.exports = mongoose.model('about', AboutSchema);
