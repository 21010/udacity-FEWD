
import { focusOnField } from './common'

function toggleAddNewTripSection () {
    const section = document.querySelector('.add-new-trip')
    section.classList.toggle('hidden')
    return section.classList.contains('hidden') ? 'hidden' : 'active'
}

function toggleMenuButtons (sectionState) {
    const btn = document.getElementById('new-trip-btn')
    btn.textContent = sectionState === 'active' ? 'Cancel' : 'New'
    btn.classList.toggle('cancel-icon')
    hideNavButtons(false)
}

export function hideNavButtons (state) {
    const btn = document.getElementById('new-trip-btn')
    state ? btn.setAttribute('style', 'display: none') : btn.removeAttribute('style')
}

function clearForm () {
    const inputs = document.querySelectorAll('form input')
    inputs.forEach(input => input.value = '')
}

function toggleScroll (sectionState) {
    const body = document.querySelector('body')
    body.classList.toggle('disable-scrolling')
    sectionState === 'active' 
        ? body.addEventListener('touchmove', resetEvent)
        : body.removeEventListener('touchmove', resetEvent)
}

// reset default event behavior
export function resetEvent (event) {
    event.preventDefault()
    return false
}

// event handler for menu button
export function toggleMenu () {
    const addNewTripSectionState = toggleAddNewTripSection()
    toggleScroll(addNewTripSectionState)
    toggleMenuButtons(addNewTripSectionState)
    clearForm()
    document.querySelector('.page-header').scrollIntoView()
    if (addNewTripSectionState === 'active') focusOnField('location')
}