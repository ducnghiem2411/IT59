import { IndexDescription, ObjectId } from "mongodb"

export interface Classroom {
    _id?: ObjectId
    classroomId: string
    classroomName: string
    teacherId: string[]
    studentsId: string[]
    studentCount: number
    createdAt: number
}

export const ClassroomIndexes: IndexDescription[] = [
    { key: { classroomId: 1 }, unique: true }
]