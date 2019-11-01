const express = require('express');
const router = express.Router();
const admin = require("firebase-admin");
const firebaseKey = admin.firestore().collection('users');

router.get('/', (req, res) => {

    const users = [];

    firebaseKey.get().then(data=>{
        data.forEach(snap=>{
            users.push(snap.data());
        });
        res.send(users);
    })
});

router.get('/:id', (req, res) => {
    firebaseKey.doc(req.params.id).get().then(data=>{
        if(data.data() == null) res.status(404).send('Data not Found')
        res.send(data.data());
    }).catch((err) => {
        res.status(404).send(err);
    })
});

router.post('/:id', (req, res) => {
    firebaseKey.doc(req.params.id).get().then(data=>{
        if(data.data() == null) res.status(404).send('Data not Found')
        let current = data.data();
        current.usertype = 'moderator';
        firebaseKey.doc(req.params.id).set(current);
    }).catch((err) => {
        res.status(404).send(err);
    })
});

router.post('/enroll/:courseid', (req, res) => {
    const uid = req.body.uid;
    const entrollments = [];
    if(uid == null || uid == ''){ res.status(400).send('Data err'); return;}
    firebaseKey.doc(uid).get().then(data=>{
        entrollments = data.data.entrollments;
        entrollments.push(req.params.userid);
        firebaseKey.doc(uid).set({username:data.data.username,usertype:data.data.usertype,entrollments});
    }).catch(e=>{
        res.status(400).send(e); return;
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


