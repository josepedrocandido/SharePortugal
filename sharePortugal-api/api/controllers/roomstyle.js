const mongoose = require("mongoose");

const Roomstyle = require("../models/roomstyle");
const Local = require("../models/local");

exports.roomstyle_get_all = (req, res, next) => {
    Place.find()
        .select("local _id nameOfPlace")
        .populate("local", "nameOfPlace")
        .exec()
        .then(docs => {
            res.status(200).json({
                count: docs.length,
                places: docs.map(doc => {
                    return {
                        _id: doc._id,
                        local: doc.local,
                        nameOfPlace: doc.nameOfPlace
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


exports.create_roomstyle = (req, res, next) => {
    Local.findById(req.body.localId)
        .then(local => {
            if (!local) {
                return res.status(404).json({
                    message: "Local not found"
                });
            }
            const roomstyle = new Roomstyle({
                _id: mongoose.Types.ObjectId(),
                local: req.body.localId,
                wallColor: req.body.wallColor,
                tableColor: req.body.tableColor,
                frameImage: req.body.frameImage
            });
            return roomstyle.save();
        })
        .then(result => {
            console.log(result);
            res.status(201).json({
                _id: result._id,
                local: result.local,
                wallColor: result.wallColor,
                tableColor: result.tableColor,
                frameImage: result.frameImage
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });

};


exports.roomstyles_get_roomstyle = (req, res, next) => {
    Roomstyle.findById(req.params.roomstyleId)
        .populate("local")
        .exec()
        .then(roomstyle => {
            if (!roomstyle) {
                return res.status(404).json({
                    message: "Roomstyle not found"
                });
            }
            res.status(200).json({
                roomstyle: roomstyle,
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
};




exports.roomstyles_delete_roomstyle = (req, res, next) => {
    Place.remove({
            _id: req.params.placeId
        })
        .exec()
        .then(result => {
            res.status(200).json({
                message: "Place deleted",
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
};


exports.roomstyles_update_roomstyle = (req, res, next) => {
    const id = req.params.roomstyleId;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    Roomstyle.update({
            _id: id
        }, {
            $set: updateOps
        })
        .exec()
        .then(result => {
            res.status(200).json({
                message: "Roomstyle updated"
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};