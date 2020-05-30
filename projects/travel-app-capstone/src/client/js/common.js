import { removeTrip } from './fetchTrips'

export function getWeatherData ({ forecast, weather }, date) {
    const weatherForDate = forecast.find(item => item[date])
    
    let data = weatherForDate 
        ? { ...Object.values(weatherForDate)[0], isWeatherAccurate: true } 
        : { ...weather, isWeatherAccurate: false }
    
    return {
        temperature: data.temperature,
        weather: data.description,
        weatherIcon: data.icon,
    }
}

export function getPhotos ({ photos }) {
    return {
        medium: photos[0].medium,
        large: photos[0].large,
    }
}

export function getCurrentDate () {
    let today = new Date()
    let day = ('0' + today.getDate()).slice(-2)
    let month = ('0' + (today.getMonth()+1)).slice(-2)
    let year = today.getFullYear()
    return `${year}-${month}-${day}`
}

export function focusOnField(id) {
    const item = document.getElementById(id)
    item.focus()
}

export function removeListItem(id) {
    removeTrip(id)
        .then(response => {
            if (response) {
                state.removeTrip(id)
                const item = document.getElementById(id)
                item.remove()
            }
        })
        .catch(error => console.warn(error))
}