const express = require('express');
const router = express.Router();
const admin = require("firebase-admin");
const firebaseKey = admin.firestore().collection('course');



module.exports = router;