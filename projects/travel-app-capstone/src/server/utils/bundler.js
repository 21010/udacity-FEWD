const geonames = require('./geonames.api')
const weatherbit = require('./weatherbit.api')
const pixabay = require('./pixabay.api')
const { daysTillDate } = require('./common')

function createBundle (location, date) {
    let bundle = {
        date,
        daysLeft: daysTillDate(date)
    }

    return geonames.get(location)
        .then(data => {
            bundle = { ...bundle, ...data[0] }
            // return { lat: data[0].lat, lng: data[0].lng }
        })
        .then(() => weatherbit.getWeatherByLatLon(bundle.lat, bundle.lng))
        .then(forecast => {
            bundle = { ...bundle, forecast }
        })
        .then(() => weatherbit.getCurrentWeatherByCityName(bundle.name))
        .then(weather => {
            bundle = { ...bundle, weather }
        })
        .then(() => pixabay.getPhotos(location))
        .then(photos => {
            bundle = { ...bundle, photos }
        })
        .then(() => {
            return bundle
        })
        .catch(error => {
            console.warn(error)
            return error
        })
}

module.exports = {
    createBundle,
}