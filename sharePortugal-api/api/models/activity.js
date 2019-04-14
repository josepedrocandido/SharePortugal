const mongoose = require('mongoose');

const activitySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    local: { type: mongoose.Schema.Types.ObjectId, ref: 'Local' },
    nameOfActivity: { type: String, required: true },
    typeOfActivity: { type: String },
    where: { type: String },
    duration: { type: String },
    price: { type: Number },
    language: { type: String },
    aboutActivity: { type: String },
    requirements: { type: String },
    activityImage: { type: String },
    webSite: { type: String },
    schedule: { type: String },
    phoneNumber: { type: Number },
    limitOfParticipants: { type: Number },
    info: { type: String }

});

module.exports = mongoose.model('Activity', activitySchema);