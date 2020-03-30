const getWikiData = require("../functions/wiki")
const generateQuestions = require("../functions/quizillion");
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

    let wikipediaContent = await getWikiData(search);
    let questions = await generateQuestions(wikipediaContent.content, 
        wikipediaContent.images);



    res.send(questions);


    // res.send(wikipediaContent);
    // run magic here

    
    /*
    res.send([
        {
            question: "Why did the chicken cross the road?",
            answer: "to go to the other side"
        },
        {
            question: "Why did the chicken cross the road?",
            answer: "to go to the other side"
        },
        {
            question: "Why did the chicken cross the road?",
            answer: "to go to the other side"
        },
        {
            question: "Why did the chicken cross the road?",
            answer: "to go to the other side"
        },
        {
            question: "Why did the chicken cross the road?",
            answer: "to go to the other side"
        },
        {
            question: "Why did the chicken cross the road?",
            answer: "to go to the other side"
        },
        {
            question: "Why did the chicken cross the road?",
            answer: "to go to the other side"
        },
        {
            question: "Why did the chicken cross the road?",
            answer: "to go to the other side"
        }
    ])
    */
});

module.exports = router;
