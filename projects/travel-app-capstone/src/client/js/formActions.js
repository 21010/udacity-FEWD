function getLocation () {
    const location = document.getElementById('location').value
    return location.trim()
}

function getDate () {
    const date = document.getElementById('date').value
    return date
}

function activateSubmitButton () {
    const button = document.getElementById('submit')
    button.removeAttribute('disabled')
}

function deactivateSubmitButton () {
    const button = document.getElementById('submit')
    button.setAttribute('disabled', 'true')
}

export function handleFormInputs () {
    const location = getLocation()
    const date = getDate()
    if (location.length > 0 && date.length > 0) 
        activateSubmitButton()
    else
        deactivateSubmitButton()
}

export function handleFormSubmit (event) {
    event.preventDefault()
    const location = getLocation()
    const date = getDate()
    
    client.validateData(location)
        .then(result => {
            if (!result) return alert('Sorry, location not found.')
            
            client.postTrip(location, date)
                .then(trip => {
                    // update client's state
                    state.addTrip(trip)
                    // hide & reset the form
                    client.toggleMenu()
                    // render new entry (trip)
                    const weather = client.getWeatherData(trip, date)
                    const images = client.getPhotos(trip)
                    const lazyImageSrc = '/media/placeholder.jpg'
                    const li = client.renderListItem({ ...trip, ...weather, images, lazyImageSrc, date })
                    const tripsList = document.querySelector('.trips-list')
                    tripsList.prepend(li)
                })
                .catch(error => console.warn(error))
        })
}