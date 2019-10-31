const express = require('express');
const router = express.Router();
const admin = require("firebase-admin");
const firebaseKey = admin.firestore().collection('courses');

router.get('/:courseid', (req, res) => {
    const units = [];
    firebaseKey.doc(req.params.courseid).collection('unitsDetails').get().then(data=>{
        data.forEach(snap=>{
            const unitid = snap.id;
            const details = snap.data();
            units.push({unitid,details});
        });
        res.send(units);
    }).catch((e) => {
        res.status(400).send(e)
    });
});

router.post('/', (req, res) => {
    const unitName = req.body.unitname;
    const content = req.body.content;
    const course = req.body.course;
    const unitid = req.body.unitid;

    if (unitName == null || content == null || course == null || unitid == null) res.status(400).send('Body error !');

    firebaseKey.doc(course).get().then(doc => {
        if (!doc.exists) res.status(400).send('Course not found !')
        else
            firebaseKey.doc(course).collection('unitsDetails').doc(unitid).create({ unitName, content }).then((write) => {
                res.send(write.id);
            }).catch((e) => {
                res.status(404).send(e)
            });
    }).catch((e) => {
        res.status(404).send(e)
    });
});

router.delete('/:course/:id', (req, res) => {
    firebaseKey.doc(req.params.course).collection('unitsDetails').doc(req.params.id).delete().then((write) => {
        res.send(write);
    }).catch((e) => {
        res.status(400).send(e);
    });
});

module.exports = router;