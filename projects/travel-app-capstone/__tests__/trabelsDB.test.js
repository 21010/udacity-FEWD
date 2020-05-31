import Travels from '../src/server/data/travels'

describe("checks if database object's methods works properly", () => {
    const travels = new Travels()

    const data1 = { name: 'London' }
    const data2 = { name: 'Paris' }
    const toBeAdded = { name: 'New York' }

    const firstItem = travels.add(data1)
    const secondItem = travels.add(data2)
    
    it('adds new trip object to the database', () => {
        expect(typeof travels.add(toBeAdded)).toBe('object')
    })

    it('removes the item with given id from the database', () => {
        expect(travels.remove(secondItem.id)).toBe(true)
    })

    it('gets the item with given id from the database', () => {
        expect(typeof travels.get(firstItem.id)).toBe('object')
    })

    it('gets all items from the database and return array', () => {
        expect(Array.isArray(travels.getAll())).toBe(true)
    })
})