const express = require('express');
const router = express.Router();
const admin = require("firebase-admin");

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
    admin.auth().getUser(req.params.id).then((userData) => {
        res.send(userData.toJSON());
    }).catch((err) => {
        res.status(404).send(err);
    })
});

router.post('/', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const username = req.body.username;
    if (email == null || password == null || username == null) res.status(400).send('Bad request body');
    admin.auth().createUser({
        email, password
    }).then((user) => {
        admin.firestore().collection('users').doc(user.uid).create({
            username,usertype:'student'
        }).then(() => {
            res.send(user.toJSON());
        }).catch((e) => {
            admin.auth().deleteUser(user.uid);
            res.status(400).send(e);
        });
    }).catch((e) => {
        res.status(400).send(e);
    })
});

router.delete('/:id', (req, res) => {
    admin.auth().deleteUser(req.params.id).then(() => {
        admin.firestore().collection('users').doc(req.params.id).delete().then(() => {
            res.send('User Deleted!')
        }).catch((e)=>{
            res.send(e);
        });
    }).catch((e)=>{
        res.send(e);
    });
});

module.exports = router;


