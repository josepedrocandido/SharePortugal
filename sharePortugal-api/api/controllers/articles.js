const mongoose = require("mongoose");

const Article = require("../models/article");
const Local = require("../models/local");

exports.articles_get_all = (req, res, next) => {
  Article.find()
    .select("local _id nameOfArticle")
    .populate("local", "nameOfArticle")
    .exec()
    .then(docs => {
      res.status(200).json({
        count: docs.length,
        articles: docs.map(doc => {
          return {
            _id: doc._id,
            local: doc.local,
            nameOfArticle: doc.nameOfArticle
          };
        })
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
};


exports.articles_create_article = (req, res, next) => {
  Article.find({ nameOfArticle: req.body.nameOfArticle })
    .then(article => {
      if (article.length > 0) {
        return res.status(409).json({
          message: "Name of Article already exists"
        });
      }
      else {
        Local.findById(req.body.localId)
          .then(local => {
            if (!local) {
              return res.status(404).json({
                message: "Local not found"
              });
            }
            const article = new Article({
              _id: mongoose.Types.ObjectId(),
              local: req.body.localId,
              nameOfArticle: req.body.nameOfArticle,
            });
            return article.save();
          })
          .then(result => {
            console.log(result);
            res.status(201).json({
              message: "Article stored",
              createdArticle: {
                _id: result._id,
                local: result.local,
                nameOfArticle: result.nameOfArticle,
              },
            });
          })
          .catch(err => {
            console.log(err);
            res.status(500).json({
              error: err
            });
          });

      }
    })
};


exports.articles_get_article = (req, res, next) => {
  Article.findById(req.params.articleId)
    .populate("local")
    .exec()
    .then(article => {
      if (!article) {
        return res.status(404).json({
          message: "Article not found"
        });
      }
      res.status(200).json({
        article: article,
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
};




exports.articles_delete_article = (req, res, next) => {
  Article.remove({ _id: req.params.articleId })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Article deleted",
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
};


exports.articles_update_article = (req, res, next) => {
  const id = req.params.articleId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Article.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Article updated"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};
