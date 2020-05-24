let travels = {}

function generateId () {
    return Math.random().toString(36).substr(2, 9)
}

module.exports = {
    add: (travel) => {
        const id = generateId()

        travels = {
            ...travels,
            [id]: { id, ...travel }
        }

        return travels[id]
    },
    remove: (id) => {
        if (typeof travels[id] === 'undefined') return
        const { [id]: {}, ...rest } = travels
        travels = rest
        return travels
    },
    get: (id) => {
        return travels[id]
    },
    getAll: () => {
        return Object.values(travels)
    },
}