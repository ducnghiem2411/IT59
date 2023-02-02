import { IndexDescription, ObjectId } from "mongodb"

export interface Student {
    _id?: ObjectId
    studentId: number
    classroomId: number
    account: string
    password: string
    fullName: string
}

export const StudentIndexes: IndexDescription[] = [
    { key: { studentId: 1 }, unique: true }
]