import { IndexDescription, ObjectId } from 'mongodb'

export interface Account {
  _id?: ObjectId
  accountId: string
  accountType: 'admin' | 'teacher' | 'student'
  classroomId: string
  accountName: string
  fullName: string
  image: string
  password: string
  email: string
  phone: string
  isApproved: boolean
  approvedAt?: number
  createdAt: number
}

export const AccountIndexes: IndexDescription[] = [
  { key: { accountId: 1 }, unique: true },
  { key: { accountType: 1 } },
  { key: { createdAt: 1 } },
  { key: { isApproved: 1 } },
  { key: { approvedAt: 1 } },
]
