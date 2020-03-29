let express = require('express');

let server = express();
let firebase = require('firebase-admin');

let serviceAccount = require('../firebase.json');

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount)
});

let db = firebase.firestore();

let userRouter = require('./routes/users')(firebase, db);
let indexRouter = require('./routes/index')(db);

server.use('/users', userRouter);
server.use('/', userRouter);

server.listen(process.env.PORT || 8000, (err) => {
    if (err) {
        throw err;
    }

    console.log("Server ready on port 8000");
});