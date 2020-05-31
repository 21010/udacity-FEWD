const fetch = require('node-fetch')

function getCountryByName (name) {
    const query = encodeURIComponent(name)
    return fetch(`https://restcountries.eu/rest/v2/name/${query}?fullText=true`)
    .then(response => {
        if (response.status !== 200) return false
        return response.json()
    })
    .then(data => {
        if (data.status && data.status === 404) return false
        return data[0]
    })

}

function getCountryByCode (code) {
    const query = encodeURIComponent(code)
    return fetch(`https://restcountries.eu/rest/v2/alpha/${query}`)
    .then(response => {
        if (response.status !== 200) return false
        return response.json()
    })
    .then(data => {
        if (data.status && data.status === 404) return false
        return data
    })

}

module.exports = {
    getCountryByName,
    getCountryByCode,
}