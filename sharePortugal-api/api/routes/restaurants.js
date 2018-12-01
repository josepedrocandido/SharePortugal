const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const multer = require('multer');
const RestaurantsController = require('../controllers/restaurants');



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
router.get("/", RestaurantsController.restaurants_get_all);

router.post("/", checkAuth, RestaurantsController.restaurants_create_restaurant);

router.get("/:restaurantId", RestaurantsController.restaurants_get_restaurant);

router.patch("/:restaurantId", checkAuth, RestaurantsController.restaurants_update_restaurant);

router.delete("/:restaurantId", checkAuth, RestaurantsController.restaurants_delete_restaurant);


module.exports = router;
