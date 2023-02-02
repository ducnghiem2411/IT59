import { IndexDescription, ObjectId } from "mongodb"

export interface AssessmentTemplate {
    _id?: ObjectId
    studentId: number
    teacherId: number
    isApproved: boolean
    account: string
    password: string
    fullName: string
    classroomId: number
}

export const AssessmentTemplateIndexes: IndexDescription[] = [
    { key: { studentId: 1 }, unique: true }
]