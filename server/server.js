let express = require('express');

let server = express();

let apiRouter = require('./routes/apiRoutes');

server.use('/users', userRouter);
server.use('/', userRouter);

server.listen(process.env.PORT || 8000, (err) => {
    if (err) {
        throw err;
    }

    console.log("Server ready on port 8000");
});