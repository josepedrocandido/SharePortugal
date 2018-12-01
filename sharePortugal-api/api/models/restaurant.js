const mongoose = require('mongoose');

const restaurantSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    local: { type: mongoose.Schema.Types.ObjectId, ref: 'Local' },
    nameOfEstablishment: { type: String, required: true },
    where: { type: String },
    phoneNumber: { type: String },
    schedule: { type: Number },
    aboutPlace: { type: String },
    typeOfEstablishment: { type: String },
    webSite: { type: String },
    localImage: { type: String },
    importantInfo: { type: String },
    typeOfFood: { type: String },
});

module.exports = mongoose.model('Restaurant', restaurantSchema);





