import { matchURL } from '../src/client/js/matchURL'

test('check if provided url is valid', () => {
    expect(matchURL('http://www.example.com')).toBe(true)
    expect(matchURL('www.example.com')).toBe(false)
    expect(matchURL('https://abc.zxc.com')).toBe(true)
})