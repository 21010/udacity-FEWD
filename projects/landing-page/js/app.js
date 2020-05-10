/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

// keep data about all sections
let sectionsData = []

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// get data about each section and update sectionsData variable
function getSectionsData () {
    let sections = []
    document.querySelectorAll('.main__section')
        .forEach(section => {
            sections.push({
                sectionId: section.id,
                anchor: section.getAttribute('data-nav'),
                active: section.classList.contains('active'),
            })
        })
    sectionsData = sections
}

// get data about active section - data is kept in global variable sectionsData
function getActiveSectionData () {
    return sectionsData.find(section => section.active)
}

// update sections (nodes) and set appriopiate classes and update the global state
function setActiveSection (sectionId) {
    document.querySelectorAll('.main__section')
        .forEach(section => {
            section.id === sectionId 
                ? section.classList.add('active')
                : section.classList.remove('active')
        })
    getSectionsData()
}

// when navigation link is clicked, update classes of sections and navigation links
function handleNavLinkClick(event) {
    if (event.target.nodeName !== 'A') return
    const sectionId = event.target.getAttribute('data-section')
    setActiveSection(sectionId)
    setActiveNavLink()
}

// set the class of active link basing on global state
function setActiveNavLink () {
    const activeSection = getActiveSectionData()
    const sectionId = activeSection !== undefined ? activeSection.sectionId : null
    document.querySelectorAll('.menu__link')
        .forEach(link => {
            link.dataset.section === sectionId
                ? link.classList.add('active')
                : link.classList.remove('active')
        })
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

// generate new li item - an element of navigation
function generateNavListItem ({ sectionId, anchor, active }) {
    const listItem = document.createElement('li') 
    listItem.appendChild(generateNavLink(sectionId, anchor, active))

    return listItem
}

// generate link which is appended to navigation list element
function generateNavLink(sectionId, anchor) {
    const navLink = document.createElement('a')
    navLink.href = `#${sectionId}`
    navLink.textContent = anchor
    navLink.setAttribute('data-section', sectionId)
    navLink.className = 'menu__link'

    return navLink
}

// generate the navigation list for all sections
function generateNavList () {
    const list = document.getElementById('navbar__list')
    sectionsData.forEach(section => {
        list.appendChild(generateNavListItem(section))
    })
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// track active sections while the page is being scrolled and update classes
function setSectionActivationOnScroll () {
    const sections = document.querySelectorAll('.main__section')
    window.addEventListener('scroll', () => {
        let id = null
        sections.forEach(section => {
            let topPosition = section.getBoundingClientRect().top.toFixed(0)
            if (topPosition <= 100) id = section.id
        })
        setActiveSection(id)
        setActiveNavLink()
    })
}

// apply actions which should be triggered when the link is clicked
function setNavLinkEvents () {
    const nav = document.getElementById('navbar__list')
    nav.addEventListener('click', (event) => handleNavLinkClick(event))
}

// when DOM content is loaded successfully initiate the data, generate navigation and set event listeners
document.addEventListener('DOMContentLoaded', () => {
    getSectionsData()
    generateNavList()
    setNavLinkEvents()
    setSectionActivationOnScroll()
})