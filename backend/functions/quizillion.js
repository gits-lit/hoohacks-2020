const request = require("request");


function generateQuestions(text) {
    request({
    url: 'https://evodms-dev.clientsolve.com/evoDMSDev/api/api_event_all.php',
    headers: {
        'Authorization': 'Bearer 71D50F9987529'
    },
    body: "do some trimming of text here",
    rejectUnauthorized: false
    }, function(err, res) {
        if(err) {
            console.error(err);
        } else {
            console.log(res.body);
        }

    });
}