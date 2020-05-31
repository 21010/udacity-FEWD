export function fetchTrips () {
    return fetch('//localhost:3000/api/travels/get')
        .then(response => response.json())
        .catch(error => console.warn(error))
}

export function postTrip (location, date) {
    return fetch('//localhost:3000/api/travels/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ location, date })
    })
        .then(response => {
            if (response.status !== 200) return alert('oops')
            return response.json()
        })
        .catch(error => console.warn(error))
}

export function removeTrip (id) {
    return fetch(`//localhost:3000/api/travels/remove/${id}`)
        .then(response => response.json())
        .catch(error => console.warn(error))
}