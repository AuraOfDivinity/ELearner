const express = require('express');
const router = express.Router();

var admin = require("firebase-admin");

var serviceAccount = require("C:/Users/user/Downloads/service-account-file.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://elearner-2a954.firebaseio.com"
});

router.get('/', (req, res) => {

    const users = [];

    admin.auth().listUsers().then((user) => {
        user.users.forEach((user) => {
            users.push(user.toJSON())
        });
        res.send(users);
    });
});

router.get('/:id', (req, res) => {
    admin.auth().getUser(uid = req.params.id).then((userData) => {
        res.send(userData.toJSON());
    }).catch((err) => {
        res.status(404).send(err);
    })
});

router.post('/', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    if (email == null|| password == null) res.status(400).send('Bad request body');
    admin.auth().createUser({
        email, password
    }).then((user) => { res.send(user.toJSON()) }).catch((e) => {
        res.status(400);
    })
});


module.exports = router;


