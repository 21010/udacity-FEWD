class Travels {
    constructor () {
        this.db = {}
    }

    add (travelData) {
        let id = Math.random().toString(36).substr(2, 9)
        if (Object.keys(this.db).includes(id)) id = id + Math.random().toString(36).substr(2,9)

        this.db = {
            ...this.db,
            [id]: { id, ...travelData }
        }

        return this.db[id]
    }

    remove (id) {
        if (!Object.keys(this.db).includes(id)) return 
        const { [id]: {}, ...rest } = this.db
        this.db = rest
        
        return this.db
    }

    get (id) {
        return this.db[id]
    }

    getAll () {
        return Object.values(this.db)
    }
}

module.exports = Travels

// let travels = {}

// function generateId () {
//     return Math.random().toString(36).substr(2, 9)
// }

// module.exports = {
//     add: (travel) => {
//         const id = generateId()

//         travels = {
//             ...travels,
//             [id]: { id, ...travel }
//         }

//         return travels[id]
//     },
//     remove: (id) => {
//         if (typeof travels[id] === 'undefined') return
//         const { [id]: {}, ...rest } = travels
//         travels = rest
//         return travels
//     },
//     get: (id) => {
//         return travels[id]
//     },
//     getAll: () => {
//         return Object.values(travels)
//     },
// }