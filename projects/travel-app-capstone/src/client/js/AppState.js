class AppState {
    constructor () {
        this.trips = []
    }

    getTrips () {
        return this.trips
    }

    setTrips (trips) {
        this.trips = trips
    }

    getTrip (id) {
        return this.trips.find(trip => trip.id === id)
    }

    addTrip (trip) {
        this.trips.push(trip)
    }

    removeTrip (id) {
        this.trips = this.trips.filter(trip => trip.id !== id)
    }
}

export default () => new AppState()