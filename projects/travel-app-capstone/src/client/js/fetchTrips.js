export function fetchTrips () {
    return fetch('//localhost:3000/api/travels/get')
        .then(response => response.json())
        .catch(error => console.warn(error))
}