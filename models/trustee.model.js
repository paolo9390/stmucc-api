const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TrusteeSchema = new Schema({
    _id: { type: Number},
    name: { type: String, required: true},
    alias: { type: String, required: false },
    description: { type: String, required: false },
    img: { type: String, required: false },
    email: { type: String, required: false }
});

// Export the model
module.exports = mongoose.model('trustees', TrusteeSchema);