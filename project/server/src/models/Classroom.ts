import { IndexDescription, ObjectId } from "mongodb"

export interface Classroom {
    _id?: ObjectId
    classroomId: number
    classroomName: string
    teacherId: number
    studentsId: number[]
    studentCount: number
    createdAt: number
}

export const ClassroomIndexes: IndexDescription[] = [
    { key: { classroomId: 1 }, unique: true }
]