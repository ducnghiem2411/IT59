import { MongoClient, Collection } from 'mongodb'
import { Student, StudentIndexes } from './models/Student'

let mongo: MongoClient

export let Students: Collection<Student>

const collections = {
    students: 'students'
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

        const db = mongo.db('TestnetAccounts')

        Students = db.collection(collections.students)

        await Promise.all([
            await Students.createIndexes(StudentIndexes)
        ])

        console.log(`🚀 Mongodb: connected`)
    } catch (e) {
        console.error(`mongodb: disconnected`)
        await mongo?.close(true)
        setTimeout(connectMongo, 1000)
        throw e
    }
}

export { mongo, connectMongo, collections }


