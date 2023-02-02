import { IndexDescription, ObjectId } from "mongodb"

export interface Report {
    _id?: ObjectId
    reportId: number
    createdAt: number
}

export const ReportIndexes: IndexDescription[] = [
    { key: { reportId: 1 }, unique: true }
]