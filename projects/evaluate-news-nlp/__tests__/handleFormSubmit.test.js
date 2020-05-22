import { getData } from '../src/client/js/handleFormSubmit'

describe('check API endpoint', () => {
    beforeEach(() => {
        fetch.resetMocks()
    })

    it('calls api and return data', () => {
        fetch.mockResponseOnce(JSON.stringify({ error: false }))

        getData('hashtags', 'http://www.udacity.com')
            .then(data => {
                expect(typeof data.error).toBe('boolean')
            })
    })
})