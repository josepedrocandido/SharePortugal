const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    local: { type: mongoose.Schema.Types.ObjectId, ref: 'Local' },
    nameOfArticle: { type: String, required: true },
    articleImage: { type: String },
    textArticle: { type: String },
    typeOfArticle: { type: String }




});

module.exports = mongoose.model('Article', articleSchema);





