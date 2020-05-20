const aylien = require('aylien_textapi')

const textApi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
})

function useTextApi (endpoint, params) {
    return new Promise((resolve, reject) => {
        textApi[endpoint]({ ...params }, (error, result) => {
            error ? reject(error) : resolve(result)
        })
    })
}

module.exports = {
    classify: (url) => useTextApi('classify', { url }),
    sentiment: (url) => useTextApi('sentiment', { url }),
    taxonomy: (url) => useTextApi('classifyByTaxonomy', { url }),
    concepts: (url) => useTextApi('concepts', { url }),
    entities: (url) => useTextApi('entities', { url }),
    extract: (url) => useTextApi('extract', { url }),
    hashtags: (url) => useTextApi('hashtags', { url }),
    language: (url) => useTextApi('language', { url }),
    summarize: (url) => useTextApi('summarize', { url }),
}