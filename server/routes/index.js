module.exports = (firebase) => {
    let express = require('express');
    let router = express.Router();

    router.post('/swiped', async (req, res) => {
        let collection = db.collection('lobby0');
        let doc = collection.doc(req.body.userId);

        await doc.set({
            'agree': req.body.agree,
            'submitted': true
        });

        collection.get()
            .then(async (snapshot) => {
                let allDone = true;
                snapshot.forEach(doc => {
                    if (!doc.data().submitted) {
                        allDone = false;
                    }
                });

                if (allDone) {
                    snapshot.forEach(doc => {
                        let docRef = collection.doc(doc.id);
                        docRef.update({
                            'agree': false,
                            'submitted': false
                        })
                    })
                }

            });
        
    });

    return router;
};