export function eventListeners() {
    const inputs = document.querySelectorAll('form input')
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            client.handleFormInputs()
        })
    })

    const form = document.querySelector('form')
    form.addEventListener('submit', (event) => {
        client.handleFormSubmit(event)
    })

    const menuButton = document.getElementById('new-trip-btn')
    menuButton.addEventListener('click', () => {
       client.handleMenuButton() 
    })
}