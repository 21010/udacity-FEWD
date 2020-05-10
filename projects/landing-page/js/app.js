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

let sectionsData = []

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
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

function getActiveSectionData () {
    return sectionsData.find(section => section.active)
}

function setActiveSection (sectionId) {
    document.querySelectorAll('.main__section')
        .forEach(section => {
            section.id === sectionId 
                ? section.classList.add('active')
                : section.classList.remove('active')
        })
    getSectionsData()
}

function handleNavLinkClick(event) {
    if (event.target.nodeName !== 'A') return
    const sectionId = event.target.getAttribute('data-section')
    setActiveSection(sectionId)
    setActiveNavLink()
}

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
function generateNavListItem ({ sectionId, anchor, active }) {
    const listItem = document.createElement('li') 
    listItem.appendChild(generateNavLink(sectionId, anchor, active))

    return listItem
}

function generateNavLink(sectionId, anchor) {
    const navLink = document.createElement('a')
    navLink.href = `#${sectionId}`
    navLink.textContent = anchor
    navLink.setAttribute('data-section', sectionId)
    navLink.className = 'menu__link'

    return navLink
}

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

function setNavLinkEvents () {
    const nav = document.getElementById('navbar__list')
    nav.addEventListener('click', (event) => handleNavLinkClick(event))
}


document.addEventListener('DOMContentLoaded', () => {
    getSectionsData()
    generateNavList()
    setNavLinkEvents()
    setSectionActivationOnScroll()
})