import { Accounts, Classrooms } from '../mongodb'
import { accountSeed, classroomSeed } from './dataseed'

export async function insertDataseed() {
  const existedAccount = await Accounts.findOne({ accountName: accountSeed[0].accountName })
  if (existedAccount) {
    return
  } else {
    await Promise.all([
        Accounts.insertMany(accountSeed), 
        Classrooms.insertMany(classroomSeed)
    ])
  }
}
