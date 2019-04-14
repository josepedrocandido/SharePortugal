const mongoose = require('mongoose');

const roomstyleSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    local: { type: mongoose.Schema.Types.ObjectId, ref: 'Local' },
    wallColor: { type: String },
    tableColor: { type: String },
    frameImage: { type: String },
    wallPattern: { type: String }
});

module.exports = mongoose.model('Roomstyle', roomstyleSchema);