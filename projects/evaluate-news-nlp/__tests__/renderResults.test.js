import { renderResultsTitle } from '../src/client/js/renderResults'

test('check if results title element is rendered', () => {
    expect(typeof renderResultsTitle()).toBe('object')
})