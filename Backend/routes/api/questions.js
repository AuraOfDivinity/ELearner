const express = require('express');
const router = express.Router();
const admin = require("firebase-admin");
const firebaseKey = admin.firestore();

router.get('/:courseid/:unitid', (req, res) => {

    const questions = [];

    firebaseKey.collection(req.params.courseid/req.params.unitid).get().then(data=>{
        data.forEach(snap=>{
            questions.push(snap.data());
        });
        res.send(questions);
    }).catch(e=>{
        res.status(400).send(e);
    });
});

router.post('/:courseid/:unitid',(req,res)=>{

    const question = req.body.question;
    const ans1 = req.body.ans1;
    const ans2 = req.body.ans2;
    const ans3 = req.body.ans3;
    const ans4 = req.body.ans4;
    const answer = req.body.answer;
    const explain = req.body.explain;

    if( (question || ans1 || ans2 || ans3 || ans4 || answer || explain) == null) res.status(400).send('missing body reqirements');

    const key = firebaseKey.collection(req.params.courseid/req.params.unitid);

    key.doc()
});



module.exports = router;