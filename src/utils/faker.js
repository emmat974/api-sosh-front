const { getConnection } = require('./database')
const fakeData = require('../utils/fake_data.json')
const userModel = require('../models/user')
const clientModel = require('../models/clients')

async function allReset() {
    try {
        const conn = await getConnection()
        await conn.query("TRUNCATE TABLE clients")
        await conn.query("TRUNCATE TABLE forfaits")
        await conn.query("TRUNCATE TABLE forfaits_type")
        await conn.query("TRUNCATE TABLE user")
    }
    catch (error) {
        console.error(error)
    }
}

async function generateFakeData() {
    try {
        const conn = await getConnection()
        for (let i = 0; i < 25; i++) {

            const user = {
                username: "User" + i,
                password: "1234"
            }

            const newUser = userModel.add(user)

            const nomIndex = Math.floor(Math.random() * data['noms'].length);
            const prenomIndex = Math.floor(Math.random() * data['prenoms'].length);

            const client = {
                firstname: fakeData['noms'][nomIndex],
                lastname: fakeData['prenoms'][prenomIndex],
                address: Math.floor(Math.random() * 200) + " rue de la " + fakeData['noms'][nomIndex],
                user: newUser[0].id
            }
        }
    } catch (error) {
        console.error(error)
    }
}