const fetch = require('node-fetch')

const key = process.env.WEATHERBIT_KEY

function generateIconLink(code) {
    return `https://www.weatherbit.io/static/img/icons/${code}.png`
}

function getCurrentWeatherByCityName (cityName) {
    return fetch(`https://api.weatherbit.io/v2.0/current?city=${encodeURIComponent(cityName)}&key=${key}`)
        .then(response => response.json())
        .then(weather => {
            return {
                pressure: weather.data["0"].pres,
                windSpeed: weather.data["0"].wind_spd,
                windDir: weather.data["0"].wind_cdir_full,
                temperature: weather.data["0"].temp,
                humidity: weather.data["0"].rh,
                icon: generateIconLink(weather.data["0"].weather.icon),
                description: weather.data["0"].weather.description,
            }
        })
}

function getCurrentWeatherByLatLon (lat, lon) {
    return fetch(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${key}`)
        .then(response => response.json())
        .then(weather => {
            return {
                pressure: weather.data["0"].pres,
                windSpeed: weather.data["0"].wind_spd,
                windDir: weather.data["0"].wind_cdir_full,
                temperature: weather.data["0"].temp,
                humidity: weather.data["0"].rh,
                icon: generateIconLink(weather.data["0"].weather.icon),
                description: weather.data["0"].weather.description,
            }
        })
}

function getWeatherByCityName (cityName) {
    return fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${cityName}&key=${key}`)
    .then(response => response.json())
    .then(weather => {
        return weather.data.map(day => {
            return {
                [day.valid_date]: {
                    pressure: day.pres,
                    windSpeed: day.wind_spd,
                    windDir: day.wind_cdir_Full,
                    temperature: day.temp,
                    humidity: day.rh,
                    icon: generateIconLink(day.weather.icon),
                    description: day.weather.description,
                }
                
            }
        })
    })
}

function getWeatherByLatLon (lat, lon) {
    return fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&key=${key}`)
        .then(response => response.json())
        .then(weather => {
            return weather.data.map(day => {
                return {
                    [day.valid_date]: {
                        pressure: day.pres,
                        windSpeed: day.wind_spd,
                        windDir: day.wind_cdir_Full,
                        temperature: day.temp,
                        humidity: day.rh,
                        icon: generateIconLink(day.weather.icon),
                        description: day.weather.description,
                    }
                    
                }
            })
        })
}
        
module.exports = {
    getCurrentWeatherByCityName,
    getCurrentWeatherByLatLon,
    getWeatherByCityName,
    getWeatherByLatLon,
}