import { MongoClient, Collection } from 'mongodb'
import { Account, AccountIndexes } from './models/Account'
import { DB_NAME } from './shared/config'

let mongo: MongoClient

export let Accounts: Collection<Account>

const collections = {
    accounts: 'accounts'
}

async function connectMongo (MONGO_URI: string) {
    try {
        console.log('MONGO_URI', MONGO_URI)
        
        mongo = new MongoClient(MONGO_URI)

        await mongo.connect()

        mongo.on('error', async (e) => {
            try {
                await mongo.close()
                await connectMongo(MONGO_URI)
            } catch (e) {
                setTimeout(connectMongo, 1000)
                throw e
            }
        })

        mongo.on('timeout', async () => {
            try {
                await mongo.close()
                await connectMongo(MONGO_URI)
            } catch (e) {
                setTimeout(connectMongo, 1000)
                throw e
            }
        })

        const db = mongo.db(DB_NAME)

        Accounts = db.collection(collections.accounts)

        await Promise.all([
            await Accounts.createIndexes(AccountIndexes)
        ])

        console.log(`🚀 Mongodb: connected`)
    } catch (e) {
        console.error(`Mongodb: disconnected`)
        await mongo?.close(true)
        setTimeout(connectMongo, 1000)
        throw e
    }
}

export { mongo, connectMongo, collections }


