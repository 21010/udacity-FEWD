export function validateData (location) {
    return fetch(`//localhost:3000/api/geonames/${location}`)
        .then(response => response.json())
        .then(data => {
            if (data.lenght === 0) return false
            const lat = data[0].lat
            const lng = data[0].lng
            return fetch(`//localhost:3000/api/weather?lat=${lat}&lng=${lng}`)
                .then(response => {
                    if (response.status === 200) return true
                    return false
                })
        })
        .catch(error => console.warn(error))
}