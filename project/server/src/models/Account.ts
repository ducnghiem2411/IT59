import { IndexDescription, ObjectId } from 'mongodb'

export interface Account {
  _id?: ObjectId
  accountId: string
  accountType: 'admin' | 'teacher' | 'student'
  classroomId: string | null
  accountName: string
  fullName: string
  image: string
  password: string
  email: string
  phone: string
  creatorId: string
  createdAt: number
}

export const AccountIndexes: IndexDescription[] = [
  { key: { accountId: 1 }, unique: true },
  { key: { accountType: 1 } },
  { key: { createdAt: 1 } },
]
