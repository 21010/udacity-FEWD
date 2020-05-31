import { validateData } from '../src/client/js/formValidator'

describe('check if API can return data for given location', () => {
    beforeEach(() => {
        fetch.resetMocks()
    })

    it('calls API with incorrect location and return boolean value (false)', () => {
        fetch.mockResponseOnce(false)

        validateData('asdfkfj3k')
            .then(result => expect(result).toBe(false))
    })

    it('calls API with correct location and return boolean value (true)', () => {
        fetch.mockResponseOnce(JSON.stringify([{ lat: 51.50853, lng: -0.12574 }]))

        validateData('London')
            .then(result => expect(result).toBe(true))
    })
})