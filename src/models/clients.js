const createCrud = require('../db/crud')
const { getConnection } = require('../db/database')

const table = 'clients'
const clientCrud = createCrud(table)

const clients = {
    ...clientCrud,
    get: async (userId) => {
        const conn = await getConnection();
        return conn.query(`SELECT * FROM ${table} WHERE id = ?`, userId)
    }
}

module.exports = clients