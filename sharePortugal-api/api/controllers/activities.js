const mongoose = require("mongoose");

const Activity = require("../models/activity");
const Local = require("../models/local");

exports.activities_get_all = (req, res, next) => {
  Activity.find()
    .select("local _id nameOfActivity")
    .populate("local", "nameOfActivity")
    .exec()
    .then(docs => {
      res.status(200).json({
        count: docs.length,
        activities: docs.map(doc => {
          return {
            _id: doc._id,
            local: doc.local,
            nameOfActivity: doc.nameOfActivity
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


exports.activities_create_activity = (req, res, next) => {
  Activity.find({ nameOfActivity: req.body.nameOfActivity })
    .then(activity => {
      if (activity.length > 0) {
        return res.status(409).json({
          message: "Name of Activity already exists"
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
            const activity = new Activity({
              _id: mongoose.Types.ObjectId(),
              local: req.body.localId,
              nameOfActivity: req.body.nameOfActivity,
              where: req.body.where
            });
            return activity.save();
          })
          .then(result => {
            console.log(result);
            res.status(201).json({
              message: "Activity stored",
              createdActivity: {
                _id: result._id,
                local: result.local,
                nameOfActivity: result.nameOfActivity,
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


exports.activities_get_activity = (req, res, next) => {
  Activity.findById(req.params.activityId)
    .populate("local")
    .exec()
    .then(activity => {
      if (!activity) {
        return res.status(404).json({
          message: "Activity not found"
        });
      }
      res.status(200).json({
        activity: activity,
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
};


exports.activities_delete_activity = (req, res, next) => {
  Activity.remove({ _id: req.params.activityId })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Activity deleted",
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
};


exports.activities_update_activity = (req, res, next) => {
  const id = req.params.activityId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Activity.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Activity updated"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};
