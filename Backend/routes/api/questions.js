const express = require('express');
const router = express.Router();
const admin = require("firebase-admin");
const firebaseKey = admin.firestore().collection('quizes');

router.get('/:courseid/:unitid', (req, res) => {

    const questions = [];

    firebaseKey.doc(req.params.courseid).collection(req.params.unitid).get().then(data=>{
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

    if( question == null || ans1 == null || ans2 == null || ans3 == null || ans4 == null || answer == null || explain == null 
        || question == '' || ans1 == '' || ans2 == '' || ans3 == '' || ans4 == '' || answer == '' || explain == ''){
            res.status(400).send('missing body reqirements');
            return;
    }
    firebaseKey.doc(req.params.courseid).collection(req.params.unitid).add({question,answer,explain,ans1,ans2,ans3,ans4}).then(()=>{
            res.send('data added!');
    }).catch(e=>{
        res.status(400).send('Bad request');
    });
});



module.exports = router;