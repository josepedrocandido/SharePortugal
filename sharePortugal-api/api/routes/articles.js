const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const multer = require('multer');
const ArticlesController = require('../controllers/articles');



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});


// Handle incoming GET requests to /places
router.get("/", ArticlesController.articles_get_all);

router.post("/", checkAuth, ArticlesController.articles_create_article);

router.get("/:articleId", ArticlesController.articles_get_article);

router.patch("/:articleId", checkAuth, ArticlesController.articles_update_article);

router.delete("/:articleId", checkAuth, ArticlesController.articles_delete_article);


module.exports = router;
