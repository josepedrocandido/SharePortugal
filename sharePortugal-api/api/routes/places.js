const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const multer = require('multer');
const PlacesController = require('../controllers/places');



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
router.get("/", PlacesController.places_get_all);

router.post("/", checkAuth, PlacesController.places_create_place);

router.get("/:placeId", PlacesController.places_get_place);

router.patch("/:placeId", checkAuth, PlacesController.places_update_place);

router.delete("/:placeId", checkAuth, PlacesController.places_delete_place);


module.exports = router;
