const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CardSchema = new Schema({
    _id: { type: Number},
    title: { type: String, required: true},
    subtitle: { type: String, required: false },
    text: { type: String, required: false },
    img: { type: String, required: false },
    items: { type: Array, required: false },
    button: { type: String, required: true },
    url: { type: String, required: true },
    standard: { type: Boolean, required: true }
});

// Export the model
module.exports = mongoose.model('cards', CardSchema);