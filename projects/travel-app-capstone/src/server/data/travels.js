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
        
        return !Object.keys(this.db).includes(id)
    }

    get (id) {
        return this.db[id]
    }

    getAll () {
        return Object.values(this.db)
    }
}

module.exports = Travels