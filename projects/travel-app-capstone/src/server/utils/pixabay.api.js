const fetch = require('node-fetch')

const key = process.env.PIXABAY_KEY

function getPhotos (keyword) {
    const query = encodeURIComponent(keyword)
    return fetch(`https://pixabay.com/api/?key=${key}&q=${query}&image_type=photo`)
        .then(response => response.json())
        .then(data => {
            if (parseInt(data.totalHits) === 0) return false

            return data.hits.map(hit => {
                return {
                    small: hit.previewURL,
                    medium: hit.webformatURL,
                    large: hit.largeImageURL,
                }
            })
        })
}

module.exports = {
    getPhotos,
}