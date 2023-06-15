const createCrud = require('../db/crud')

const consommationCrud = createCrud('consommation')

const consommation = {
    ...consommationCrud,
    get: async (id) => {
        const conn = await getConnection();
        return conn.query(`SELECT * FROM ${table} WHERE ${table}.idForfait = ?`, id)
    }
}

module.exports = consommation