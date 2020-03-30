const wiki = require('wikijs').default;

module.exports = (search) => {
    return new Promise((resolve, reject) => {
        wiki()
        .page(search)
        .then(async page => {
            // const images = await page.images();
            // const qaArray = generateQA(await page.rawContent(), images)

            resolve({
                content: await page.rawContent(),
                images: await page.images()
            });
        })
        .catch(err => reject(err));
    })
}



function generateQA(text, images) {
    let machineLearning = Math.random;

    const qa = []; // {question: "text", answer: "text", image: "url"}
    // step 1 split into sentences
    const sentences = text.split(".");
    
    // step 2 identify 15 key questions
    for (let j = 0; j < 15; j++) {
        const sentenceIndex = Math.floor(machineLearning() * sentences.length);
        let sentence = sentences[sentenceIndex];
        let words = sentence.split(" ");

        let wordIndex = "", word = "", tries = 0
        do {
            wordIndex = Math.floor(machineLearning() * words.length);
            word = words[wordIndex];
            console.log(tries)
            ++tries;
        } while (word.length < 5 && tries < 4);

        
        words[wordIndex] = "______";
        sentence = words.join(" ");

        qa.push({
            question: sentence,
            answer: word,
            image: images[j % images.length]
        })
    }
    return qa;
}