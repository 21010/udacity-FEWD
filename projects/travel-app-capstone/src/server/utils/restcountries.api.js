const fetch = require('node-fetch')

function getCountryByName (name) {
    return fetch(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
    .then(response => response.json())
    .then(data => {
        if (data.status && data.status === 404) return false
        return data[0]
    })

}

function getCountryByCode (code) {
    return fetch(`https://restcountries.eu/rest/v2/alpha/${code}`)
    .then(response => response.json())
    .then(data => {
        if (data.status && data.status === 404) return false
        return data
    })

}

module.exports = {
    getCountryByName,
    getCountryByCode,
}