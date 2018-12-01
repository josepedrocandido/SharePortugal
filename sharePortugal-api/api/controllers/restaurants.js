const mongoose = require("mongoose");

const Restaurant = require("../models/restaurant");
const Local = require("../models/local");

exports.restaurants_get_all = (req, res, next) => {
  Restaurant.find()
    .select("local _id nameOfEstablishment")
    .populate("local", "nameOfEstablishment")
    .exec()
    .then(docs => {
      res.status(200).json({
        count: docs.length,
        restaurants: docs.map(doc => {
          return {
            _id: doc._id,
            local: doc.local,
            nameOfEstablishment: doc.nameOfEstablishment
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


exports.restaurants_create_restaurant = (req, res, next) => {
  Restaurant.find({ nameOfEstablishment: req.body.nameOfEstablishment })
    .then(restaurant => {
      if (restaurant.length > 0) {
        return res.status(409).json({
          message: "Name of Establishment already exists"
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
            const restaurant = new Restaurant({
              _id: mongoose.Types.ObjectId(),
              local: req.body.localId,
              nameOfEstablishment: req.body.nameOfEstablishment,
              where: req.body.where
            });
            return restaurant.save();
          })
          .then(result => {
            console.log(result);
            res.status(201).json({
              message: "Establishment stored",
              createdRestaurant: {
                _id: result._id,
                local: result.local,
                nameOfEstablishment: result.nameOfEstablishment,
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


exports.restaurants_get_restaurant = (req, res, next) => {
  Restaurant.findById(req.params.restaurantId)
    .populate("local")
    .exec()
    .then(restaurant => {
      if (!restaurant) {
        return res.status(404).json({
          message: "Establishment not found"
        });
      }
      res.status(200).json({
        restaurant: restaurant,
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
};




exports.restaurants_delete_restaurant = (req, res, next) => {
  Restaurant.remove({ _id: req.params.restaurantId })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Establishment deleted",
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
};


exports.restaurants_update_restaurant = (req, res, next) => {
  const id = req.params.restaurantId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Restaurant.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Establishment updated"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};
