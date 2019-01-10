const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const multer = require('multer');
const RoomstyleController = require('../controllers/roomstyle');



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


router.get("/", RoomstyleController.roomstyle_get_all);

router.post("/", checkAuth, RoomstyleController.create_roomstyle);

router.get("/:roomstyleId", RoomstyleController.roomstyles_get_roomstyle);

router.patch("/:roomstyleId", checkAuth, RoomstyleController.roomstyles_update_roomstyle);

router.delete("/:roomstyleId", checkAuth, RoomstyleController.roomstyles_delete_roomstyle);


module.exports = router;