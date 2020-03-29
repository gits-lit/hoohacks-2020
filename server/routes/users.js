module.exports = (firebase, db) => {
    let express = require('express');
    let router = express.Router();


    router.post('/signin', (req, res) => {
        //create user
        firebase.auth().createUser(req.body.user)

        //add to lobby
        db.collection('lobby0').doc(req.body.user.uid).set({
            'agree': false,
            'submitted': false
        })

    });

    return router;
};