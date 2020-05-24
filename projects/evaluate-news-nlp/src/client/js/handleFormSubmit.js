function showResults (state) {
    const btn = document.getElementById('results-btn')
    state ? btn.classList.remove('hidden') : btn.classList.add('hidden')
    
    const section = document.getElementById('results-section')
    section.style.display = state ? 'flex' : 'none'
}

export function getData (type, url) {
    return fetch(`//localhost:3000/api/${type}?url=${url}`)
    .then(response => response.json())
    // .then(data => data)
}

export function preventFormSubmit (event) {
    event.preventDefault()
    return false
}

export function handleFormSubmit (event, type) {
    event.preventDefault()
    showResults(false)
    const url = document.getElementById('url').value

    if (!client.matchURL(url)) return alert('url is incorrect')

    console.log('loading...')

    getData(type, url).then(data => {
        console.log('data received')
        client.renderResults({ type, url, data })
        showResults(true)
    }).catch(error => console.warn(error))
}

