const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    // run magic here
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
});

module.exports = router;
