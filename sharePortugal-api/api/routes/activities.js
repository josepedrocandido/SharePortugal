const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const multer = require('multer');
const ActivitiesController = require('../controllers/activities');



const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
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
router.get("/", ActivitiesController.activities_get_all);

router.post("/", checkAuth, ActivitiesController.activities_create_activity);

router.get("/:activityId", ActivitiesController.activities_get_activity);

router.patch("/:activityId", checkAuth, ActivitiesController.activities_update_activity);

router.delete("/:activityId", checkAuth, ActivitiesController.activities_delete_activity);


module.exports = router;