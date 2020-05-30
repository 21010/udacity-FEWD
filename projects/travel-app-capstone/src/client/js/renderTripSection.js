export function renderListItem ({ id, date, name, countryName, images, lazyImageSrc, temperature, weather, weatherIcon, daysLeft }) {
    const listItem = document.createElement('li')
    listItem.classList.add('trips-list-item')
    listItem.id = id

    listItem.appendChild(renderItemHeader(date, name, countryName))
    listItem.appendChild(renderPicture(images, lazyImageSrc))
    listItem.appendChild(renderWeatherDetails(temperature, weather, weatherIcon))
    listItem.appendChild(renderCounter(daysLeft))
    listItem.appendChild(renderItemMenu(id))

    return listItem
}

function renderItemHeader (date, cityName, country) {
    const header = document.createElement('div')
    header.classList.add('trips-list-item-header')
    header.appendChild(renderDateSpan(date))
    header.appendChild(renderHeaderGroup(cityName, country))
    return header
}

function renderDateSpan (date) {
    const dateSpan = document.createElement('span')
    dateSpan.classList.add('trips-list-item-date')
    dateSpan.textContent = date
    return dateSpan
}

function renderHeaderGroup (cityName, country) {
    const headerGroup = document.createElement('hgroup')
    headerGroup.classList.add('trips-list-item-title')
    const h2 = document.createElement('h2')
    h2.textContent = cityName
    headerGroup.appendChild(h2)

    const h3 = document.createElement('h3')
    h3.textContent = country
    headerGroup.appendChild(h3)

    return headerGroup
}

function renderPicture (images, lazyImageSrc) {
    const picture = document.createElement('picture')
    picture.classList.add('trips-list-item-image')

    const largeImage = document.createElement('source')
    largeImage.setAttribute('media', '(min-width: 699px)')
    largeImage.setAttribute('srcset', images.large)
    picture.appendChild(largeImage)

    const mediumImage = document.createElement('source')
    mediumImage.setAttribute('media', '(max-width: 700px)')
    mediumImage.setAttribute('srcset', images.medium)
    picture.appendChild(mediumImage)

    const lazyImage = document.createElement('img')
    lazyImage.setAttribute('loading', 'lazy')
    lazyImage.setAttribute('src', lazyImageSrc)
    picture.appendChild(lazyImage)

    return picture
}

function renderWeatherDetails (temperature, weather, weatherIcon) {
    const weatherDetails = document.createElement('dl')
    weatherDetails.classList.add('trips-list-item-details', 'weather')
    
    const temperatureDetails = document.createElement('dl')
    temperatureDetails.classList.add('details-temperature')
    const temperatureLabel = document.createElement('dt')
    temperatureLabel.textContent = '🌡'
    temperatureDetails.appendChild(temperatureLabel)

    const temperatureValue = document.createElement('dd')
    temperatureValue.textContent = temperature
    temperatureDetails.appendChild(temperatureValue)

    weatherDetails.appendChild(temperatureDetails)

    const weatherDescription = document.createElement('p')
    weatherDescription.classList.add('details-weather')
    weatherDescription.textContent = weather
    const icon = document.createElement('img')
    icon.classList.add('details-weather-icon')
    icon.src = weatherIcon
    weatherDescription.prepend(icon)
    weatherDetails.appendChild(weatherDescription)

    return weatherDetails
}

function renderCounter (days) {
    const counter = document.createElement('span')
    counter.classList.add('trips-list-item-details', 'counter')

    const counterDetails = document.createElement('p')
    counterDetails.classList.add('details-counter')
    counterDetails.textContent = days >= 0 ? `${days} days to this trip!` : 'trip expired!'
    counter.appendChild(counterDetails)

    return counter
}

function renderItemMenu (id) {
    const menu = document.createElement('div')
    menu.classList.add('trips-list-item-menu')

    const removeBtn = document.createElement('button')
    removeBtn.classList.add('trips-list-item-remove-btn')
    removeBtn.textContent = 'remove'
    removeBtn.addEventListener('click', () => client.removeListItem(id))
    menu.appendChild(removeBtn)

    return menu
}