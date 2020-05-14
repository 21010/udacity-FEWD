// Personal API Key for OpenWeatherMap API
const key = '64420ae58fc890bffcc8a65491dcb1ac'

// OpenWeather API URI
const openWeatherApiUri = (zipCode) => `//api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${key}` 

// backend API
const api = {
    add: '//localhost:3000/api/add',
    all: '//localhost:3000/api/all',
}

// helpers
const time = () => {
    let now = new Date()
    return now.getTime()
}

/* Function called by event listener */
function handleFormSubmit() {
    const zipCode = document.getElementById('zip').value
    const content = document.getElementById('feelings').value
    addEntry(zipCode, content)
        .then((newEntry) => {
            const parent = document.querySelector('.entries-box')
            const entry = generateNewEntryDomNode(newEntry)
            parent.insertBefore(entry, parent.firstChild)
            // clean the form fields
            document.getElementById('zip').value = ''
            document.getElementById('feelings').value = ''
        })
        .catch(error => console.warn(error))
}

function addEntry(zipCode, content) {
    return getWeather(zipCode)
        .then((data) => {
            if (data.cod !== 200) {
                alert(data.message)
                throw new Error(data.message)
            }
            return data
        })
        .then((data) => postNewEntry({ 
            time: time(), 
            temp: data.main.temp, 
            content, 
        }))
        .catch(error => console.warn(error))
}

/* Function to render added entry */
function generateNewEntryDomNode({ date, temp, content }) {
    
    const entry = document.createElement('div')
    entry.className = 'entry'
    
    const dateSpan = generateEntryChildNode('span', 'date', date)
    entry.appendChild(dateSpan)
    
    const tempSpan = generateEntryChildNode('span', 'temp', temp)
    entry.appendChild(tempSpan)
    
    const contentSpan = generateEntryChildNode('span', 'content', content)
    entry.appendChild(contentSpan)

    return entry
}

/* Function generates new DOM element */
function generateEntryChildNode(tag, className, textContent) {
    const item = document.createElement(tag)
    item.className = className
    item.textContent = textContent
    return item
}

// render entries fetched from backend api
function renderEntries(entries) {
    const parent = document.querySelector('.entries-box')
    const displayStyle = parent.style.display
    parent.style.display = 'none'
    parent.innerHTML = ''
    entries.map(entry => parent.appendChild(generateNewEntryDomNode(entry)))
    parent.style.display = displayStyle
}

/* Function to GET Web API Data*/
function getWeather(zipCode) {
    return fetch(openWeatherApiUri(zipCode), { method: 'GET' })
        .then(response => response.json())
        .then(data => data)
}

/* Function to POST data */
function postNewEntry({ time, temp, content }) {
    return fetch(api.add, {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ time, temp, content }),
    })
        .then(response => response.json())
        .then(data => data)
}

/* Function to GET Project Data */
function getEntries() {
    return fetch (api.all, {
        method: 'GET',
        credentials: 'same-origin',
    })
        .then(response => response.json())
        .then(data => data)
}


document.addEventListener('DOMContentLoaded', () => {
    // get already added entries and render the list
    getEntries().then(renderEntries)
    
    // Event listener to add function to existing HTML DOM element
    document.getElementById('generate').addEventListener('click', (event) => {
        event.preventDefault()
        handleFormSubmit()
    })

})