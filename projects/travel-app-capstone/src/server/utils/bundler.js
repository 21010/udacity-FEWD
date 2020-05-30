const geonames = require('./geonames.api')
const weatherbit = require('./weatherbit.api')
const pixabay = require('./pixabay.api')
const unsplash = require('./unsplash.api')
const { daysTillDate } = require('./common')

function createBundle (location, date) {
    let bundle = {
        date,
        daysLeft: daysTillDate(date)
    }

    return geonames.get(location)
        .then(data => {
            bundle = { ...bundle, ...data[0] }
        })
        .then(() => weatherbit.getWeatherByLatLon(bundle.lat, bundle.lng))
        .then(forecast => {
            bundle = { ...bundle, forecast }
        })
        .then(() => weatherbit.getCurrentWeatherByLatLon(bundle.lat, bundle.lng))
        .then(weather => {
            bundle = { ...bundle, weather }
        })
        .then(() => pixabay.getPhotos(location))
        .then(pixabayPhotos => {
            const fallBackPhotos = unsplash.getPhotos(`${bundle.countryName}+holidays`)
            bundle = {
                ...bundle,
                photos: pixabayPhotos ? pixabayPhotos : fallBackPhotos
            }
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