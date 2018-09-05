"use strict";

import express from "express";
import db from "../model/mysqlConnector";

import bcrypt from "bcryptjs";

const router = express.Router();

const validateHash = function(inputPW, password) {
  return bcrypt.compareSync(inputPW, password);
};

const generateHash = function(password) {
  return bcrypt.hashSync(password, 8);
};

// get login status
router.get("/", (req, res) => {
  if (typeof req.session.currentUser === "undefined") {
    return res.status(401).json({
      error: "User is undefined",
      code: 1
    });
  }

  return res.json({ result: req.session.currentUser });
});

// try login
router.post("/", (req, res) => {
  let id = req.body.id;
  let password = req.body.password;

  let query = "SELECT * FROM User WHERE userID = ?";
  db.query(query, id, (err, result) => {
    if (err) {
      console.log("login fail / fault data");
      return res.status(403).json({
        error: "Check Data",
        code: 1
      });
    }

    if (!result[0]) {
      console.log("login fail / wrong userID");
      return res.status(401).json({
        error: "Wrong UserID",
        code: 2
      });
    }

    if (!validateHash(password, result[0].password)) {
      console.log("login fail / wrong password");
      return res.status(401).json({
        error: "Wrong Password",
        code: 3
      });
    }

    console.log(result[0]);

    // add session
    let session = req.session.currentUser = {
      userID: id,
      name: result[0].name,
      type: result[0].type
    };

    console.log("user login: " + req.session.currentUser.userID);
    res.json({ result: session });
  });
});

// logout
router.get("/logout", (req, res) => {
  console.log("user logout: " + req.session.currentUser.userID);
  req.session.destroy();
  return res.json({ result: true });
});

export default router;
