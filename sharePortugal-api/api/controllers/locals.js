const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Local = require("../models/local");

exports.local_signup = (req, res, next) => {
    Local.find({ email: req.body.email })
        .exec()
        .then(local => {
            if (local.length >= 1) {
                return res.status(409).json({
                    message: "Mail exists"
                });
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            error: err
                        });
                    } else {

                        console.log("Response received-- start");
                        console.log(req);
                        console.log("Response received--- end");

                        const local = new Local({
                            _id: new mongoose.Types.ObjectId(),
                            email: req.body.email,
                            password: hash,
                            name: req.body.name,
                            birthday: req.body.birthday,
                            citizenship: req.body.citizenship,
                            languages: req.body.languages,
                            citisToShare: req.body.citisToShare,
                            job: req.body.job,
                            aboutMe: req.body.aboutMe,
                            // localImage: req.file.path
                        });
                        local
                            .save()
                            .then(result => {
                                console.log(result);
                                res.status(201).json({
                                    message: "Local created"
                                });
                            })
                            .catch(err => {
                                console.log(err);
                                res.status(500).json({
                                    error: err
                                });
                            });
                    }
                });
            }
        });
};

exports.local_login = (req, res, next) => {
    Local.find({ email: req.body.email })
        .exec()
        .then(local => {
            if (local.length < 1) {
                return res.status(401).json({
                    message: "Auth failed"
                });
            }
            bcrypt.compare(req.body.password, local[0].password, (err, result) => {
                if (err) {
                    return res.status(401).json({
                        message: "Auth failed"
                    });
                }
                if (result) {
                    const token = jwt.sign({
                            email: local[0].email,
                            localId: local[0]._id
                        },
                        process.env.JWT_KEY, {
                            expiresIn: "1h"
                        }
                    );
                    return res.status(200).json({
                        message: "Auth successful",
                        token: token
                    });
                }
                res.status(401).json({
                    message: "Auth failed"
                });
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};

exports.locals_get_all = (req, res, next) => {
    Local.find()
        .select("_id name email birthday citizenship languages citisToShare job aboutMe localImage")
        .exec()
        .then(docs => {

            //   if (docs.length >= 0) {
            res.status(200).json(docs);
            //   } else {
            //       res.status(404).json({
            //           message: 'No entries found'
            //       });
            //   }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};

exports.local_delete = (req, res, next) => {
    Local.remove({ _id: req.params.localId })
        .exec()
        .then(result => {
            res.status(200).json({
                message: "Local deleted"
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};



exports.locals_get_local = (req, res, next) => {
    const id = req.params.localId;
    Local.findById(id)
        .select("_id name email birthday citizenship languages citisToShare job aboutMe localImage")
        .exec()
        .then(doc => {
            console.log("From database", doc);
            if (doc) {
                res.status(200).json({
                    local: doc
                });
            } else {
                res
                    .status(404)
                    .json({ message: "No valid entry found for provided ID" });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
};


exports.locals_update_local = (req, res, next) => {
    const id = req.params.localId;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    Local.update({ _id: id }, { $set: updateOps })
        .exec()
        .then(result => {
            res.status(200).json({
                message: "Local user updated",
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};