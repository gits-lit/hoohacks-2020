const request = require("request");
const axios = require('axios');

function generateQuestions(text, images) {
    var options = {
        'method': 'POST',
        'url': 'https://app.quillionz.com:8243/quillionzapifree/1.0.0/API/SubmitContent_GetQuestions?shortAnswer=false&recall=true&mcq=false&whQuestions=false&title=Steve%20Jobs',
        'headers': {
            'Authorization': 'Bearer ' + process.env.API_KEY,
            'Content-Type': 'text/plain'
        },
        body: text.slice(0, 15000)
    };
    return new Promise((resolve, reject) => {
        request(options, function (error, response) {
            if (error) {
                reject(error);
            }

            try {
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
            } catch(err) {
                reject(err);
            }
        });
    });
}

module.exports = generateQuestions;