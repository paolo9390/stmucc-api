const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AboutSchema = new Schema({
    title: {type: String, required: true, max: 40},
    subtitle: {type: String, required: false, max: 100},
    content: {type: String, required: true},
});

// Export the model
module.exports = mongoose.model('About', AboutSchema);