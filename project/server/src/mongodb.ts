import { MongoClient, Collection } from 'mongodb'
import { Account, AccountIndexes } from './models/Account'
import { AssessmentTemplate, AssessmentTemplateIndexes } from './models/AssessmentTemplate'
import { Classroom, ClassroomIndexes } from './models/Classroom'
import { DB_NAME } from './shared/config'

let mongo: MongoClient

export let Accounts: Collection<Account>
export let Classrooms: Collection<Classroom>
export let AssessmentTemplates: Collection<AssessmentTemplate>


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
            Accounts.createIndexes(AccountIndexes),
            AssessmentTemplates.createIndexes(AssessmentTemplateIndexes),
            Classrooms.createIndexes(ClassroomIndexes)
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


