const fetch = require('node-fetch')
const username = process.env.GEONAMES_USER

function get (cityName) {
    return fetch(`http://api.geonames.org/searchJSON?maxRows=10&q=${cityName}&username=${username}`)
        .then(response => {
            if (response.status !== 200) return false
            return response.json()
        })
        .then(data => {
            if (data.totalResultsCount === 0) return false
            return data.geonames.map(row => {
                return {
                    name: row.name,
                    lng: row.lng,
                    lat: row.lat,
                    countryName: row.countryName,
                    countryCode: row.countryCode,
                }
            })
        })
}

module.exports = {
    get,
}