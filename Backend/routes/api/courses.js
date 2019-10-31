const express = require('express');
const router = express.Router();
const admin = require("firebase-admin");

const firebaseKey = admin.firestore().collection('courses');


router.get('/', (req, res) => {
    const courses = [];
    firebaseKey.get().then(data => {
        data.forEach(snapshot => {
            const id = snapshot.id;
            const data = snapshot.data();

            courses.push({ id, data });
        });
        res.send(courses);
    }).catch((e) => {
        res.status(400).send(e)
    });
});

router.get('/:id', (req, res) => {
    firebaseKey.doc(req.params.id).get().then(data => {
        if(data.data() == null) res.status(404).send('Data not Found')
        res.send(data.data());
    }).catch((e) => {
        res.status(400).send(e);
    });
});

router.post('/', (req, res) => {
    const coursename = req.body.coursename;
    const units = req.body.units;
    const participents = 0;
    const enrollmentkey = req.body.enrollmentkey;

    if (coursename == null || units == null || enrollmentkey == null) res.status(400).send('Body error !');

    firebaseKey.doc(enrollmentkey).create({ coursename, units, participents }).then(() => {
        res.send('Course added !')
    }).catch((e) => {
        res.status(400).send(e);
    });
});

router.delete('/:id', (req, res) => {
    firebaseKey.doc(req.params.id).delete().then((write) => {
        res.send(write);
    }).catch((e) => {
        res.status(400).send(e);
    });
});

module.exports = router;