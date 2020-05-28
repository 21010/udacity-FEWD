import { handleMenuButton, resetEvent } from './js/menuButton'
import { handleFormInputs, handleFormSubmit } from './js/addTripForm'
import { eventListeners } from './js/eventListeners'
import AppState from './js/AppState'
import { fetchTrips } from './js/fetchTrips'

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
    handleMenuButton,
    resetEvent,
    handleFormInputs,
    handleFormSubmit,
    eventListeners,
    fetchTrips,
    AppState,
}