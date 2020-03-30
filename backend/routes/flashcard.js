const {getWikipediaData, backupQuestionGen} = require("../functions/wiki")
const  generateQuestions = require("../functions/quizillion");
const express = require('express');
const router = express.Router();


/* GET home page. */
router.get('/', async (req, res, next) => {
    const search = req.query.search;

    if (search == undefined) {
        res.status(422);
        res.send({
            error: "Missing search parameter!"
        })
    }

    //get questions from wikipedia
    try {
        let wikipediaContent = await getWikipediaData(search);
        try {
            let questions = await generateQuestions(wikipediaContent.content, wikipediaContent.images);
            res.send(questions);
        } catch(err) {
            let questions = backupQuestionGen(wikipediaContent.content, wikipediaContent.images);
            res.send(questions);
        }
    }  catch(err) {
        res.send([{
            question: "An Error Occurred",
            answer: "GG!",
            image: "https://i.imgur.com/Vg90nST.jpg"
        }])
    }
});

module.exports = router;
