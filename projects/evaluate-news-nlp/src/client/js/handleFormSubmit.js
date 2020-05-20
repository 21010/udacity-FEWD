export function handleFormSubmit (event, type) {
    event.preventDefault()

    const url = document.getElementById('url').value

    if (!client.matchURL(url)) return alert('url is incorrect')

    console.log('loading...')

    fetch(`//localhost:3000/api/${type}?url=${url}`)
        .then(response => response.json())
        .then(data => {
            console.log('data received')
            client.renderResults({ type, url, data })
        })
        .catch(error => console.warn(error))
}

