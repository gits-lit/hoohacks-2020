const request = require("request");


function generateQuestions(text) {
    request({
    url: 'https://app.quillionz.com:8243/quillionzapifree/1.0.0/API/SubmitContent_GetQuestions?shortAnswer=true&recall=true&mcq=true&whQuestions=false&title=Steve%20Jobs',
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