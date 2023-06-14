const createCrud = require('../db/crud')
const { getConnection } = require('../db/database')

const table = 'forfaits'
const forfaitCrud = createCrud(table)

const forfait = {
    ...forfaitCrud,
    get: async (userId) => {
        const conn = await getConnection();
        return conn.query(`SELECT ${table}.id, ${table}.createdAt, ${table}.isActive, forfait_type.name FROM ${table} INNER JOIN forfait_type ON ${table}.typeForfait = forfait_type.id WHERE ${table}.userId = ?`, userId)
    }
}

module.exports = forfait