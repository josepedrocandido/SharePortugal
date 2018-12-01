const mongoose = require('mongoose');

const placeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    local: { type: mongoose.Schema.Types.ObjectId, ref: 'Local' },
    nameOfPlace: { type: String, required: true },
    where: { type: String },
    price: { type: Number },
    schedule: { type: Number },
    aboutPlace: { type: String },
    typeOfPlace: { type: String },
    webSite: { type: String },
    localImage: { type: String },
    importantInfo: { type: String },
    phoneNumber: { type: String }
});

module.exports = mongoose.model('Place', placeSchema);





