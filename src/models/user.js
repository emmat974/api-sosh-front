const createCrud = require('../db/crud')
const { getConnection } = require('../db/database')

const table = 'user'
const user = createCrud(table)

const userCrud = {
    ...user,
    login: async (username) => {
        const conn = await getConnection();
        return conn.query(`SELECT username, password, id FROM ${table} WHERE username = ?`, username)
    }
}

module.exports = userCrud