export function eventListeners() {
    //set state of the client's app
    state = client.AppState()

    // event listeners
    const form = document.querySelector('form')
    form.addEventListener('input', () => client.handleFormInputs())
    form.addEventListener('submit', (e) => client.handleFormSubmit(e))

    const menuButton = document.getElementById('new-trip-btn')
    menuButton.addEventListener('click', () => client.toggleMenu())
    
    // set the minimum value for "date" input to prevent selecting past dates
    const dateInput = document.getElementById('date')
    dateInput.setAttribute('min', client.getCurrentDate())

    // fetch trips from the "database"
    client.fetchTrips()
        .then(trips => {
            // update app's state
            state.setTrips(trips)
            
            // if no trips show the form
            if (trips.length === 0) {
                client.toggleMenu()
                client.hideNavButtons(true)
            } else {
                client.hideNavButtons(false)
                // renter trips' list
                state.getTrips().reverse().forEach(trip => {
                    const weather = client.getWeatherData(trip, date)
                    const images = client.getPhotos(trip)
                    const lazyImageSrc = '/media/placeholder.jpg'
                    const li = client.renderListItem({ ...trip, ...weather, images, lazyImageSrc })
                    const tripsList = document.querySelector('.trips-list')
                    tripsList.appendChild(li)
                })
            }

        })
}