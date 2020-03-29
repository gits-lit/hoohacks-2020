module.exports = (firebase) => {
    let express = require('express');
    let router = express.Router();

    router.get('/create', (req, res) => {
        firebase.auth().createUser(req.body.user)
    });

    return router;
}
