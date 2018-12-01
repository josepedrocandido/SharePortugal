const express = require("express");
const router = express.Router();
const multer = require('multer');
const LocalController = require('../controllers/locals');
const checkAuth = require('../middleware/check-auth');


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads');
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


router.get("/", LocalController.locals_get_all);

router.post("/signup", upload.single('localImage'), LocalController.local_signup);

router.post("/login", LocalController.local_login);

router.get("/:localId", LocalController.locals_get_local);

router.patch("/:localId", LocalController.locals_update_local);

router.delete("/:localId", LocalController.local_delete);

module.exports = router;

// router.patch("/:localId", checkAuth, LocalController.locals_update_local);