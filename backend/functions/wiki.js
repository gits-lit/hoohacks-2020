const wiki = require('wikijs').default;

module.exports = (search) => {
    return new Promise((resolve, reject) => {
        wiki()
        .page(search)
        .then(page => resolve(page.rawContent()))
        .catch(err => reject(err));
    })
}

