const request = require("request");
const axios = require('axios');
const QuillionzApiFree = require('quillionz_api_free');
const defaultClient = QuillionzApiFree.ApiClient.instance;
let def = defaultClient.authentications['default'];
def.accessToken = process.env.API_KEY;

function generateQuestions(text) {
    //     return new Promise((resolve, reject) => {request({
    //     url: "https://app.quillionz.com:8243/quillionzapifree/1.0.0/API/SubmitContent_GetQuestions?shortAnswer=true&recall=true&mcq=true&whQuestions=false&title=Steve%20Jobs",
    //     headers: {
    //         'Authorization': 'Bearer ' + process.env.API_KEY
    //     },
    //     body: text.slice(0, 10000),
    //     rejectUnauthorized: false
    //     }, function(err, res) {
    //         console.log(res.body);
    //         resolve(res.body);
    //     });
    // });
    // let apiInstance = new QuillionzApiFree.DefaultApi();
    // let shortAnswer = true;
    // let recall = true;
    // let mcq = true;
    // let whQuestions = false;
    // let title = "Steve Jobs";
    // let body = text.slice(0, 10000);

    // return new Promise((resolve, reject) => {
    //     apiInstance.aPISubmitContentGetQuestionsPost(shortAnswer, recall, mcq, 
    //         whQuestions, title, body, (err, data, res) => {
    //             console.log(res);
    //             console.log(data);
    //             resolve(res);
    //         })
    // })
    // let request = {
    //     method: 'POST',
    //     url: "https://app.quillionz.com:8243/quillionzapifree/1.0.0/API/SubmitContent_GetQuestions?shortAnswer=true&recall=true&mcq=true&whQuestions=false&title=Steve%20Jobs",
    //     headers: {
    //         'Authorization': 'Bearer ' + process.env.API_KEY
    //     },
    //     body: text.slice(0, 10000),
    // }

    // console.log(request.body.split(' ').length);
    // return new Promise((resolve, reject) => {
    // axios(request).then((res) => {
    //     console.log(res.data);
    //     resolve(res.data);
    // }).catch((err) => {
    //     console.log(err);
    // });

    var options = {
        'method': 'POST',
        'url': 'https://app.quillionz.com:8243/quillionzapifree/1.0.0/API/SubmitContent_GetQuestions?shortAnswer=true&recall=true&mcq=true&whQuestions=false&title=Steve%20Jobs',
        'headers': {
            'Authorization': 'Bearer ' + process.env.API_KEY,
            'Content-Type': 'text/plain'
        },
        body: text.slice(0, 10000)
    };
    return new Promise((resolve, reject) => {
        request(options, function (error, response) {
            if (error) throw new Error(error);
            debugger;
            console.log(response);
            console.log(response.body);

            resolve(response.body);
        });
    });



}

module.exports = generateQuestions;