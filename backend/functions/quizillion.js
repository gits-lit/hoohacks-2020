const request = require("request");
const axios = require('axios');

function generateQuestions(text, images) {
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
        'url': 'https://app.quillionz.com:8243/quillionzapifree/1.0.0/API/SubmitContent_GetQuestions?shortAnswer=false&recall=true&mcq=false&whQuestions=false&title=Steve%20Jobs',
        'headers': {
            'Authorization': 'Bearer ' + process.env.API_KEY,
            'Content-Type': 'text/plain'
        },
        body: text.slice(0, 10000)
    };
    return new Promise((resolve, reject) => {
        request(options, function (error, response) {
            if (error) throw new Error(error);

            console.log(response.body);
            let questionObject = JSON.parse(response.body);
            let questionArray = questionObject.Data.recall;
            let qa = [];

            for (let i = 0; i < 15; i++) {
                qa.push({
                    question: questionArray[i].Question,
                    answer: questionArray[i].Answer,
                    image: images[i % images.length]
                })
            }

            resolve(qa);
        });
    });
}

module.exports = generateQuestions;