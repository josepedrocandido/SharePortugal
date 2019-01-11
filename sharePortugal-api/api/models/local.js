const mongoose = require('mongoose');

const localSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: {
        type: String,
        required: true,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: { type: String, required: true },
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: false },
    birthday: { type: Date, required: false },
    citizenship: { type: String, required: false },
    languages: { type: String, required: false },
    citiesToShare: { type: String, required: false },
    job: { type: String, required: false },
    aboutMe: { type: String, required: false },
    localImage: { type: String, required: false }
});

module.exports = mongoose.model('Local', localSchema);