import { IndexDescription, ObjectId } from "mongodb"

export interface Account {
    _id?: ObjectId
    accountId: number
    accountType: 'admin' | 'teacher' | 'student'
    classroomId: number
    account: string
    fullName: string
    image: string
    password: string
    email: string
    phone: string
    isApproved: boolean
    createdAt: number
    approvedAt: number
}

export const AccountIndexes: IndexDescription[] = [
    { key: { accountId: 1 }, unique: true }
]