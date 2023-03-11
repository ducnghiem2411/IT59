import { IndexDescription, ObjectId } from "mongodb"
import { Account } from "./Account"
import { Classroom } from "./Classroom"

export interface AssessmentTemplate {
    _id?: ObjectId
    creator: Account
    censors: Account[]
    classroom: Classroom
    evidence: string
    images: string[]
    comments?: Comment[]
    point: number
    timeframe: string
    startTime: number
    endTime: number
    isApproved: boolean
    approvedAt?: number
    createdAt: number
}

export interface Comment {
    creatorId: string
    text: string
    image: string
    createdAt: number
}

export const AssessmentTemplateIndexes: IndexDescription[] = [
    { key: { "creator.id" : 1 } },
    { key: { "sensors.id" : 1 } }
]