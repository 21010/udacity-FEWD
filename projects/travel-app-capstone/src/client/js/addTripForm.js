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
    
    fetch('http://localhost:3000/api/travels/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ location, date })
    })
        .then(response => response.json())
        .then(trip => {
            // update client's state
            state.addTrip(trip)
            // hide & reset the form
            client.handleMenuButton()
            // render new entry (trip)
            console.log(state)
        })
        .catch(error => console.warn(error))
}