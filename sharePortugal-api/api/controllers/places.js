const mongoose = require("mongoose");

const Place = require("../models/place");
const Local = require("../models/local");

exports.places_get_all = (req, res, next) => {
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


exports.places_create_place = (req, res, next) => {
  Place.find({ nameOfPlace: req.body.nameOfPlace })
    .then(place => {
      if (place.length > 0) {
        return res.status(409).json({
          message: "Name of Place already exists"
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
            const place = new Place({
              _id: mongoose.Types.ObjectId(),
              local: req.body.localId,
              nameOfPlace: req.body.nameOfPlace,
              where: req.body.where
            });
            return place.save();
          })
          .then(result => {
            console.log(result);
            res.status(201).json({
              message: "Place stored",
              createdPlace: {
                _id: result._id,
                local: result.local,
                nameOfPlace: result.nameOfPlace,
                where: result.where
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


exports.places_get_place = (req, res, next) => {
  Place.findById(req.params.placeId)
    .populate("local")
    .exec()
    .then(place => {
      if (!place) {
        return res.status(404).json({
          message: "Place not found"
        });
      }
      res.status(200).json({
        place: place,
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
};




exports.places_delete_place = (req, res, next) => {
  Place.remove({ _id: req.params.placeId })
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


exports.places_update_place = (req, res, next) => {
  const id = req.params.placeId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Place.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Place updated"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};
