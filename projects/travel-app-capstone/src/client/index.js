import { toggleMenu, resetEvent, hideNavButtons } from './js/navActions'
import { handleFormInputs, handleFormSubmit } from './js/formActions'
import { eventListeners } from './js/eventListeners'
import AppState from './js/AppState'
import { fetchTrips, postTrip } from './js/fetchTrips'
import { renderListItem } from './js/renderTripSection'
import { getPhotos, getWeatherData, getCurrentDate, focusOnField, removeListItem } from './js/common'
import { validateData } from './js/formValidator'

// import SASS files
import './styles/base.scss'
import './styles/page-header.scss'
import './styles/page-nav.scss'
import './styles/page-main.scss'
import './styles/page-footer.scss'
import './styles/trips-list.scss'
import './styles/trips-list-item.scss'
import './styles/add-trip.scss'

// import media
import logo from './media/logo.svg'

// export library
export {
    toggleMenu,
    resetEvent,
    focusOnField,
    removeListItem,
    handleFormInputs,
    handleFormSubmit,
    eventListeners,
    fetchTrips,
    postTrip,
    renderListItem,
    getCurrentDate,
    getPhotos,
    getWeatherData,
    validateData,
    hideNavButtons,
    AppState,
}