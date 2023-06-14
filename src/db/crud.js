const { getConnection } = require('./database')

const createCrud = (table) => {
    return {
        add: async (data) => {
            const conn = await getConnection();
            return conn.query(`INSERT INTO ${table} SET ?`, data)
        },
        remove: async (id) => {
            const conn = await getConnection();

            return conn.query(`DELETE FROM ${table} WHERE id = ?`, id)
        },
        get: async (id) => {
            const conn = await getConnection();
            return conn.query(`SELECT * FROM ${table} WHERE id = ?`, id)
        },
        getAll: async () => {
            const conn = await getConnection();
            return conn.query(`SELECT * FROM ${table}`)
        },
        update: async (id, data) => {
            const conn = await getConnection();
            return conn.query(`UPDATE stockage SET ? WHERE id = ?`, data, id)
        }
    }

}

module.exports = createCrud
